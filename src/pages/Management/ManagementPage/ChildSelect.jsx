// ChildSelect.js
import React from 'react';
import styled from 'styled-components';

const ChildSelectContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ECECEC;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px 0px;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 30%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: border-color 0.5s ease-in-out, border-width 0.5s ease-in-out;
  border: 2px solid transparent;

  &:hover::before {
    content: "";
    top: 100%;
    left: 0;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.5s ease, width 0.5s ease;
    background-color: orange;
    width: 0;
    transition-delay: 0.5s;
  }

  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ChildSelect = ({ handleImageClick }) => {
  return (
    <ChildSelectContainer>
      <PersonContainer>
        <ImageContainer>
          <Image
            src={require("./img/아이1.jpeg")}
            alt="김이산"
            onClick={(event) => handleImageClick(event, "./img/아이1.jpeg", "김이산")}
          />
        </ImageContainer>
        <div className="name">김이산</div>
      </PersonContainer>
      <PersonContainer>
        <ImageContainer>
          <Image
            src={require("./img/아이2.jpg")}
            alt="이진이"
            onClick={(event) => handleImageClick(event, "./img/아이2.jpg", "이진이")}
          />
        </ImageContainer>
        <div className="name">이진이</div>
      </PersonContainer>
      <PersonContainer>
        <ImageContainer>
          <Image
            src={require("./img/아이3.jpg")}
            alt="김민지"
            onClick={(event) => handleImageClick(event, "./img/아이3.jpg", "김민지")}
          />
        </ImageContainer>
        <div className="name">김민지</div>
      </PersonContainer>
      <PersonContainer>
        <ImageContainer>
          <Image
            src={require("./img/아이4.jpg")}
            alt="은지원"
            onClick={(event) => handleImageClick(event, "./img/아이4.jpg", "은지원")}
          />
        </ImageContainer>
        <div className="name">은지원</div>
      </PersonContainer>
    </ChildSelectContainer>
  );
}

export default ChildSelect;
