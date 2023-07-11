import React from "react";
import styled from "styled-components";

const FooterBody = styled.div`
  width: 100vw;
  max-hight: 58px;

  position: fixed;
  bottom: 0;

  padding: 11px 0px 11px 0px;

  text-align: center;

  border-left: 1px;
  border: solid rgb(0, 0, 0, 0.1);
`;

const TextBox = styled.span`
  font-size: 12px;
  white-space: pre-wrap;
  color: #888888;
`;

export default function Footer() {
  return (
    <FooterBody>
      <TextBox>
        개인정보 처리방침 | 이용 약관
        <br />
        All rights reserved @ Codestates
      </TextBox>
    </FooterBody>
  );
}
