// SendButton.js
import React from 'react';
import styled from 'styled-components';

const SendButtonContainer = styled.div`
  text-align: center;
`;

const SendButton = styled.button`
  background-color: #F9C515;
  width: 100%;
  height :100%;

  &:hover {
    background-color: gold;
  }

  padding: 10px 40px; /* 버튼 안의 내용물과 주변 간격 설정 */
  font-size: 20px; /* 폰트 크기를 키워서 버튼 크기를 크게 만듭니다. */
  border: none;
  cursor: pointer;
`;

const SendButtonComponent = () => {
  return (
    <SendButtonContainer>
      <SendButton>송금하기</SendButton>
    </SendButtonContainer>
  );
}

export default SendButtonComponent;
