import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as LogoName } from "../assets/logoname.svg";
import { ReactComponent as DropButtonIcon } from "../assets/dropdown-button.svg";

const HeaderBody = styled.div`
  width: 100vw;
  max-hight: 80px;

  display: flex;
  justify-content: space-between;

  box-shadow: 0px 8px 8px 0px rgb(0, 0, 0, 0.1);

  position: fixed;
  top: 0;
`;

const StyledLink = styled(Link)`
  margin: 25px 0px 25px 76px;
`;

const LogoImg = styled(Logo)`
  margin-right: 12px;
`;

const DropButton = styled.button`
  border: 0;
  background-color: transparent;

  margin-right: 76px;

  cursor: pointer;
`;

export default function Header() {
  return (
    <HeaderBody>
      <StyledLink to="/">
        <LogoImg />
        <LogoName />
      </StyledLink>
      <DropButton>
        <DropButtonIcon />
      </DropButton>
    </HeaderBody>
  );
}
