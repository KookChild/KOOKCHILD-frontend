// SendButton.js
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'; // SweetAlert2 라이브러리 import

const SendButtonContainer = styled.div`
  text-align: center;
`;

const SendButton = styled.button`
  width: 360px;
  height: 66px;
  padding: 10px 40px;
  font-size: 20px;
  border: none;
  cursor: pointer;

  /* Add a conditional style to change background color when disabled */
  ${({ disabled }) => disabled
    ? `
      background-color: #ccc; /* Change to the desired gray color */
      cursor: not-allowed;
    `
    : `
      background-color: #F9C515;
      &:hover {
        background-color: gold;
      }
    `
  }
`;


const SendButtonComponent = ({disabled}) => {
  const handleSendButtonClick = () => {
    // SweetAlert2 모달 창 표시
    Swal.fire({
      title: '송금하시겠습니까?',
      text: '예',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      reverseButtons: true,
    }).then((result) => {
      // 사용자가 확인 버튼을 누르면
      if (result.isConfirmed) {
        // 성공 알림 표시
        Swal.fire('우리아이에게 송금이 완료되었습니다.', '찾아주셔서 감사합니다', 'success');
      }
    });
  };

  return (
    <SendButtonContainer>
       <SendButton 
       onClick={handleSendButtonClick}  disabled={disabled} >송금하기</SendButton>
    </SendButtonContainer>
  );
}

export default SendButtonComponent;
