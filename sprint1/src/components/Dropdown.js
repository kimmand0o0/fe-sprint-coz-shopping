import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ProductButton } from "../assets/dropdown-product-button.svg";
import { ReactComponent as BookmarkButton } from "../assets/dropdown-bookmark-button.svg";
import { ReactComponent as Polygon } from "../assets/polygon.svg";

const StyledPolygon = styled(Polygon)`
  position: absolute;
  right: 50px;
  top: -15px;
`;

const DropdownBody = styled.div`
  width: 200px;
  height: 153px;

  display: flex;
  flex-direction: column;

  position: absolute;
  right: 30px;
  top: 70px;

  background-color: #ffffff;

  text-align: center;

  border-radius: 12px;

  box-shadow: 0px 0px 20px 4px rgb(0, 0, 0, 0.1);
`;

const DropMenu = styled.section`
  overflow: hidden;
`;

const DropText = styled.div`
  width: 200px;
  height: 50px;
  line-height: 50px;

  font-size: 17px;

  border-bottom: solid 0.5px rgb(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

export default function Dropdown() {
  return (
    <DropdownBody>
      <StyledPolygon />
      <DropMenu>
        <DropText>ㅇㅇㅇ님, 안녕하세요!</DropText>
        <StyledLink to="/products/list">
          <ProductButton />
        </StyledLink>
        <StyledLink to="/bookmark">
          <BookmarkButton />
        </StyledLink>
      </DropMenu>
    </DropdownBody>
  );
}
