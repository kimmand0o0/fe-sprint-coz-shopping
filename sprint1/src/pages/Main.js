import React, { useState } from "react";
import styled from "styled-components";
import Item from "../components/Item";

const items = [
  {
    id: 57,
    type: "Brand",
    title: null,
    sub_title: null,
    brand_name: "구찌",
    price: null,
    discountPercentage: null,
    image_url: null,
    brand_image_url:
      "https://images.unsplash.com/photo-1560519622-7229023b9c86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    follower: 8094,
  },
  {
    id: 76,
    type: "Category",
    title: "파티용품",
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
    brand_image_url: null,
    follower: null,
  },
  {
    id: 70,
    type: "Exhibition",
    title: "주방 용품 모음전",
    sub_title: "인덕션 냄비 반값 할인 중",
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      "https://images.unsplash.com/photo-1556912173-46c336c7fd55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    brand_image_url: null,
    follower: null,
  },
  {
    id: 67,
    type: "Product",
    title: "아이스크림 모자",
    sub_title: null,
    brand_name: null,
    price: "11900",
    discountPercentage: 50,
    image_url:
      "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    brand_image_url: null,
    follower: null,
  },
];

const MainContainer = styled.div`
  width: 100vw;

  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductBody = styled.div`
  background-color: gray;
  width: 80vw;
`;

const ProductTitle = styled.h3`
  font-size: 24px;
  line-height: 29.05px;
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 0;
`;

export default function Main() {
  const [bookmark, setBookmark] = useState([]);
  const handleClick = (e, id) => {};

  return (
    <div>
      <MainContainer>
        <ProductBody>
          <ProductTitle>상품 리스트</ProductTitle>
          <ProductList>
            {items.map((item, idx) => (
              <Item
                item={item}
                bookmark={bookmark.filter((i) =>
                  i.id === item.id ? true : false
                )}
                key={idx}
                handleClick={handleClick}
              />
            ))}
          </ProductList>
        </ProductBody>
      </MainContainer>
    </div>
  );
}
