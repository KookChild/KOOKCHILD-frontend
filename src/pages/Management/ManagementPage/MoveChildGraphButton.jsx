import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기


const Button = styled.button`
  background-color: #f9c515;
  width: 100%; /* 좌우로 크게 설정 */
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  padding: 10px; /* 좌우 여백을 크게 조절하여 텍스트와 버튼의 크기를 맞춥니다 */
  font-size: 20px; /* 텍스트 크기를 크게 설정 */
  cursor: pointer;
`;

const MoveChildGraphButton = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

  const getChildGraphButtonClick = () => {
    // '/graph/detail' 경로로 이동
    navigate('/graph/detail');
  };

  return (
    <Button onClick={getChildGraphButtonClick}>우리 아이 소비 통계 보러 가기</Button>
  );
};

export default MoveChildGraphButton;