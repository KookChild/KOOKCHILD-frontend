// SendButton.js
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'; // SweetAlert2 라이브러리 import

const SendButtonContainer = styled.div`
  text-align: center;
`;

const SendButton = styled.button`
  background-color: #F9C515;
  width: 360px;
  height: 66px;

  &:hover {
    background-color: gold;
  }

  padding: 10px 40px; /* 버튼 안의 내용물과 주변 간격 설정 */
  font-size: 20px; /* 폰트 크기를 키워서 버튼 크기를 크게 만듭니다. */
  border: none;
  cursor: pointer;
`;

const SendButtonComponent = () => {
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
       <SendButton onClick={handleSendButtonClick}>송금하기</SendButton>
    </SendButtonContainer>
  );
}

export default SendButtonComponent;
