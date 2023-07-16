import React from "react";
import styled from "styled-components";
import { ReactComponent as BookmarkerOn } from "../assets/bookmarker-on.svg";
import { ReactComponent as BookmarkerOff } from "../assets/bookmarker-off.svg";

const ItemBody = styled.li`
  width: 264px;
  height: 264px;

  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;

  list-style: none;
`;

const ItemImg = styled.div`
  width: 264px;
  height: 210px;

  border: 1px;
  border-radius: 12px;

  display: block;
  position: relative;
  overflow: hidden;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
`;

const ItemTitle = styled.strong`
  height: 24px;
  top: 216px;

  line-height: 19.36px

  font-size: 16px;
`;

const ItemDiscount = styled.strong`
  height: 24px;
  top: 216px;

  color: blue;
`;

const ContentLeft = styled.a`
  width: 266px;
  height: 24px;
  top: 240px;

  line-height: 19.36px;

  font-size: 16px;
`;

const ContentRight = styled.a`
  width: 266px;
  height: 24px;
  top: 240px;

  line-height: 19.36px

  font-size: 16px;

  display: flex;
  justify-content : end;
`;

const BookmarkButton = styled.button`
  width: 24px;
  height: 24px;

  margin-left: 220px;
  margin-top: 170px;

  border: 0;
  background-color: transparent;

  position: absolute;

  z-index: 10;
`;

export default function Item({ item, bookmark, handleClick, modalClick }) {
  return (
    <ItemBody key={item.id} className="item">
      <BookmarkButton onClick={(e) => handleClick(e, item)}>
        {bookmark.length ? <BookmarkerOn /> : <BookmarkerOff />}
      </BookmarkButton>
      <section onClick={(e) => modalClick(e, item)}>
        {item.type === "Brand" && (
          <ItemImg>
            <StyledImg src={item.brand_image_url} alt={item.brand_name} />
          </ItemImg>
        )}
        {item.type !== "Brand" && (
          <ItemImg>
            <StyledImg src={item.image_url} alt={item.title} />
          </ItemImg>
        )}

        <StyledSection>
          {item.type === "Brand" && <ItemTitle>{item.brand_name}</ItemTitle>}
          {item.type === "Brand" && <ItemTitle>관심고객수</ItemTitle>}
          {item.type !== "Brand" && <ItemTitle>{item.title}</ItemTitle>}
          {item.type === "Product" && (
            <ItemDiscount>{item.discountPercentage + "%"}</ItemDiscount>
          )}
        </StyledSection>
        {item.type === "Brand" && (
          <ContentRight>
            {[item.follower].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </ContentRight>
        )}
        {item.type === "Product" && (
          <ContentRight>
            {[item.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </ContentRight>
        )}
        {item.type === "Exhibition" && (
          <ContentLeft>{item.sub_title}</ContentLeft>
        )}
      </section>
    </ItemBody>
  );
}
