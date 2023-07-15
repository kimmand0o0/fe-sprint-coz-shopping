import React from "react";
import styled from "styled-components";
import { ReactComponent as BookmarkerOn } from "../assets/bookmarker-on.svg";
import { ReactComponent as BookmarkerOff } from "../assets/bookmarker-off.svg";
import { ReactComponent as CloseSvg } from "../assets/modal-close.svg";

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 1000;

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgb(255, 255, 255, 0.4);
`;

const ModalBody = styled.div`
  width: 744px;
  height: 480px;
  border-radius: 12px;

  display: block;
  position: relative;
  overflow: hidden;

  z-index: 1000;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 0px 15px 8px rgb(0, 0, 0, 0.2);
`;

const ItemImg = styled.img`
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

const ModalTitle = styled.strong`
  margin-left: 60px;
  margin-top: 430px;

  font-size: 24px;
  line-height: 29.05px;

  color: #ffffff;

  border: 0;
  background-color: transparent;

  position: absolute;

  z-index: 10;
`;

const BookmarkButton = styled.button`
  width: 24px;
  height: 24px;

  margin-left: 20px;
  margin-top: 430px;

  border: 0;
  background-color: transparent;

  position: absolute;

  z-index: 10;
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;

  margin-left: 690px;
  margin-top: 20px;

  border: 0;
  background-color: transparent;

  position: absolute;

  z-index: 10;
`;

export default function ItemModal({ item, bookmark, handleClick, modalClose }) {
  return (
    <ModalContainer>
      <ModalBody>
        {item.type === "Brand" && (
          <ItemImg src={item.brand_image_url} alt={item.brand_name} />
        )}
        {item.type !== "Brand" && (
          <ItemImg src={item.image_url} alt={item.title} />
        )}
        <BookmarkButton onClick={(e) => handleClick(e, item)}>
          {bookmark.filter((i) => i.id === item.id).length !== 0 ? (
            <BookmarkerOn />
          ) : (
            <BookmarkerOff />
          )}
        </BookmarkButton>
        {item.type === "Brand" && <ModalTitle>{item.brand_name}</ModalTitle>}
        {item.type !== "Brand" && <ModalTitle>{item.title}</ModalTitle>}
        <CloseButton onClick={(e) => modalClose(e)}>
          <CloseSvg />
        </CloseButton>
      </ModalBody>
    </ModalContainer>
  );
}
