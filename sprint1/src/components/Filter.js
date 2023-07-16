import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FilterBody = styled.button`
  width: 82px;
  height: 110px;

  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: gray;

  border: 0;
  background-color: transparent;

  cursor: pointer;
`;

const FilterImgBox = styled.div`
  width: 82px;
  height: 82px;

  display: block;
  position: relative;
  overflow: hidden;
`;

const FilterImg = styled.img`
  width: 82px;
  height: 82px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const FilterTitle = styled.span`
  font-size: 16px;
`;

const FilterTitleHold = styled.span`
  font-size: 16px;
  color: #412dd4;
  font-weight: bold;
  text-decoration: underline;
  text-underline-position: under;
`;

export default function Filter({ filter, handleClick }) {
  return (
    <FilterContainer>
      <FilterBody onClick={(e) => handleClick(e, "all")}>
        <FilterImgBox>
          <FilterImg src="../Image/allButton.png" alt="allButton" />
        </FilterImgBox>
        {filter === "all" ? (
          <FilterTitleHold>전체</FilterTitleHold>
        ) : (
          <FilterTitle>전체</FilterTitle>
        )}
      </FilterBody>
      <FilterBody onClick={(e) => handleClick(e, "Product")}>
        <FilterImgBox>
          <FilterImg src="../Image/productButton.png" alt="productButton" />
        </FilterImgBox>
        {filter === "Product" ? (
          <FilterTitleHold>상품</FilterTitleHold>
        ) : (
          <FilterTitle>상품</FilterTitle>
        )}
      </FilterBody>
      <FilterBody onClick={(e) => handleClick(e, "Category")}>
        <FilterImgBox>
          <FilterImg src="../Image/categoryButton.png" alt="categoryButton" />
        </FilterImgBox>
        {filter === "Category" ? (
          <FilterTitleHold>카테고리</FilterTitleHold>
        ) : (
          <FilterTitle>카테고리</FilterTitle>
        )}
      </FilterBody>
      <FilterBody onClick={(e) => handleClick(e, "Exhibition")}>
        <FilterImgBox>
          <FilterImg
            src="../Image/exhibitionButton.png"
            alt="exhibitionButton"
          />
        </FilterImgBox>
        {filter === "Exhibition" ? (
          <FilterTitleHold>기획전</FilterTitleHold>
        ) : (
          <FilterTitle>기획전</FilterTitle>
        )}
      </FilterBody>
      <FilterBody onClick={(e) => handleClick(e, "Brand")}>
        <FilterImgBox>
          <FilterImg src="../Image/brandButton.png" alt="brandButton" />
        </FilterImgBox>
        {filter === "Brand" ? (
          <FilterTitleHold>브랜드</FilterTitleHold>
        ) : (
          <FilterTitle>브랜드</FilterTitle>
        )}
      </FilterBody>
    </FilterContainer>
  );
}
