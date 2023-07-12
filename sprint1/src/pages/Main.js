import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Item from "../components/Item";

const MainContainer = styled.div`
  width: 100vw;

  padding-top: 80px;
  padding-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListSection = styled.section`
  width: 100vw;
  margin-left: 20vw;
`;

const ListTitle = styled.h3`
  font-size: 24px;
  line-height: 29.05px;
  margin: 20px 0px 20px 0px;
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;

  padding: 0;
  margin: 0;
`;

export default function Main() {
  const [bookmark, setBookmark] = useState([]);
  const [items, setItems] = useState([]);

  const handleClick = (e, item) => {
    const isBookmark = bookmark.filter((i) => i.id === item.id);
    if (!isBookmark.length) {
      // 북마크가 등록 되어야함.
      setBookmark([...bookmark, item]);
    } else {
      // 등록되어 있는 북마크는 삭제 되어야함.
      for (let i = 0; i < bookmark.length; i++) {
        if (bookmark[i].id === item.id) {
          bookmark.splice(i, 1);
          setBookmark([...bookmark]);
        }
      }
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      axios
        .get("http://cozshopping.codestates-seb.link/api/v1/products", {
          params: {
            count: 10,
          },
        })
        .then((result) => setItems(result.data))
        .catch(() => {
          console.log("err");
        });
    }
  }, []);

  return (
    <div>
      <MainContainer>
        <ListSection>
          <ListTitle>상품 리스트</ListTitle>
          <ProductList>
            {items
              .map((item, idx) => (
                <Item
                  item={item}
                  bookmark={bookmark.filter((i) =>
                    i.id === item.id ? true : false
                  )}
                  key={idx}
                  handleClick={handleClick}
                />
              ))
              .slice(0, 4)}
          </ProductList>
        </ListSection>
        <ListSection>
          <ListTitle>북마크 리스트</ListTitle>
          <ProductList>
            {bookmark
              .map((item, idx) => (
                <Item
                  item={item}
                  bookmark={bookmark.filter((i) => i.id === item.id)}
                  key={idx}
                  handleClick={handleClick}
                />
              ))
              .slice(0, 4)}
          </ProductList>
        </ListSection>
      </MainContainer>
    </div>
  );
}
