import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as LogoName } from "../assets/logoname.svg";
import { ReactComponent as DropButtonIcon } from "../assets/dropdown-button.svg";

const HeaderBody = styled.div`
  width: 1280px;
  hight: 80px;

  display: flex;
  justify-content: space-between;

  padding: 25px 76px 25px 86px;

  box-shadow: 0px 8px 8px 0px rgb(0, 0, 0, 0.1);

  position: fixed;
`;

const DropButton = styled.button`
  border: 0;
  background-color: transparent;

  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderBody>
      <Link to="/">
        <Logo style={{ marginRight: "12px" }} />
        <LogoName />
      </Link>
      <DropButton>
        <DropButtonIcon />
      </DropButton>
    </HeaderBody>
  );
}
