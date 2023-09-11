import React from 'react';
import styled from 'styled-components';

const SendButtonContainer = styled.div`
  position: relative;
  bottom: 0;
  right: 0;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #f9c515;
  width: auto; /* 자동으로 너비를 설정하여 버튼 크기를 텍스트에 맞게 만듭니다 */
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  padding: 5px 10px; /* 좌우 여백을 조절하여 텍스트와 버튼의 크기를 맞춥니다 */
  font-size: 14px;
  cursor: pointer;
`;

const AccountDetailInfoButton = () => {
  const getAccountDetailButtonClick = () => {
    // TODO : 송금하기 이동 ajax 연결
    console.log("송금하기");
  };

  return (
    <SendButtonContainer>
      <Button onClick={getAccountDetailButtonClick}>송금하기</Button>
    </SendButtonContainer>
  );
};

export default AccountDetailInfoButton;
