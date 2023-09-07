import "./style.css";
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import ChildSelect from "./ChildSelect";
import BankContent from "./BankContent";
import SendButtonComponent from "./SendButton";

// 화면을 중앙 정렬하는 스타일 컴포넌트
const CenteredContainer = styled.div`
  width: 360px;     /* 가로 크기 */
  height: 600px;    /* 세로 크기 */
  position: absolute;
  top: 50%;         /* 세로 중앙 정렬 */
  left: 50%;        /* 가로 중앙 정렬 */
  transform: translate(-50%, -50%); /* 가로, 세로 중앙 정렬을 위한 변환 */
  background-color: #f0f0f0; /* 배경색을 원하는 색상으로 변경 */
  border: 1px solid #ccc;    /* 테두리 스타일을 원하는 스타일로 변경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  padding: 20px; /* 내부 여백 설정 */

  display: flex;
  flex-direction: column; /* 자식 컴포넌트를 세로로 배치 */
  justify-content: space-between; /* 컴포넌트들을 위아래로 분배 */
`;

const Header = styled.div`
  padding: 10px;
  text-align: center;
`;


const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const Footer = styled.div`
  text-align: center;
`;

export const ManagementPage = () => {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [childName, setChildName] = useState(""); 

  const personContainerRef = useRef(null); // ref 생성

  const handleImageClick = (event, imagePath, altText) => {
    const clickedImgSrc = imagePath;
    setSelectedPicture(clickedImgSrc);

    setChildName(altText);

    console.log(selectedPicture);
    console.log(altText);
  };
  return (
    <CenteredContainer>
      <Header>
        {/* ChildSelect 컴포넌트를 Header 안에 렌더링 */}
        <ChildSelect handleImageClick={handleImageClick} />
      </Header>
      <MainContent>
        {/* 중간 컨텐츠 */}
        <BankContent selectedPicture={selectedPicture} childName={childName} />
      </MainContent>
      <Footer>
        {/* 푸터 */}
        <SendButtonComponent />
      </Footer>
  </CenteredContainer>
  )
}
