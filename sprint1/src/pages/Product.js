import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Item from "../components/Item";
import Modal from "../components/ItemModal";
import Filter from "../components/Filter";

const ProductContainer = styled.div`
  width: 100vw;

  padding-top: 80px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductBody = styled.div`
  width: 80vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  padding: 0;
  margin: 0;
`;

const FilterSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 10px;
`;

export default function Product() {
  const data = JSON.parse(localStorage.getItem("bookmark"));

  const [bookmark, setBookmark] = useState([...data]);
  const [items, setItems] = useState([]);
  const [modal, setModal] = useState(null);
  const [filter, setFilter] = useState("all");

  const filterButtonClick = (e, value) => {
    if (filter !== value) setFilter(value);
  };

  const bookmarkButtonClick = (e, item) => {
    const isBookmark = bookmark.filter((i) => i.id === item.id);
    if (!isBookmark.length) {
      // 북마크가 등록 되어야함.
      setBookmark([...bookmark, item]);
      localStorage.setItem("bookmark", JSON.stringify([...bookmark, item]));
    } else {
      // 등록되어 있는 북마크는 삭제 되어야함.
      for (let i = 0; i < bookmark.length; i++) {
        if (bookmark[i].id === item.id) {
          bookmark.splice(i, 1);
          setBookmark([...bookmark]);
          localStorage.setItem("bookmark", JSON.stringify([...bookmark]));
        }
      }
    }
  };

  const modalClick = (e, item) => {
    if (modal === null) setModal(item);
  };

  const modalClose = (e) => {
    if (modal !== null) setModal(null);
  };

  // 무한스크롤
  const [page, setPage] = useState(1);
  const [currentProduct, setCurrentProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const bottom = useRef(null);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products", {})
      .then((result) => {
        setItems(result.data);
        setCurrentProducts(result.data.slice(0, 10 * page));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderNextPage = useCallback(() => {
    setIsLoading(true);
    if (page < 10) {
      setCurrentProducts(items.slice(0, 10 * (page + 1)));
      setPage(page + 1);
    }
    setIsLoading(false);
  }, [page, items]);

  useEffect(() => {
    if (bottom.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            renderNextPage();
          }
        },
        {
          threshold: 1,
        }
      );
      observer.observe(bottom.current);
      return () => observer.disconnect();
    }
  }, [renderNextPage]);

  return (
    <ProductContainer>
      {modal && (
        <Modal
          item={modal}
          bookmark={bookmark}
          handleClick={bookmarkButtonClick}
          modalClose={modalClose}
        />
      )}
      <FilterSection>
        <Filter filter={filter} handleClick={filterButtonClick} />
      </FilterSection>
      <ProductBody>
        <ProductList>
          {currentProduct
            .filter((i) => (filter === "all" ? i : i.type === filter))
            .map((item, idx) => (
              <Item
                item={item}
                bookmark={bookmark.filter((i) => i.id === item.id)}
                key={idx}
                handleClick={bookmarkButtonClick}
                modalClick={modalClick}
              />
            ))}
        </ProductList>
        {isLoading ? "loading..." : <div ref={bottom} />}
      </ProductBody>
    </ProductContainer>
  );
}
