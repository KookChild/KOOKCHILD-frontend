// SendButton.js
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'; // SweetAlert2 라이브러리 import
import './css/SendButton.css';
import axios from 'axios';


const SendButtonContainer = styled.div`
  text-align: center;
`;

const SendButtonBox = styled.button`
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


const SendButtonComponent = ({disabled, setDisabled}) => {
  const handleSendButtonClick = () => {
    setDisabled(true);
    // API 요청 보내기

    Swal.fire({
      title: '<span style="font-size: 20px;">송금을\n 진행하시겠습니까?</span>',
      text: '',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      customClass: {
        // 모달에 사용할 클래스 추가
        container: 'custom-swal-container',
      },
    
    }).then((result) => { //Swal.fire then 호출
      if(result.isConfirmed){
        axios
        .post('/management/send', {
          childId: 4, // 원하는 childId와 parentId 값을 설정
          parentId: 1,
        })
        .then((response) => { // axios then 호출
          if(response.data){
            // SweetAlert2 모달 창 표시
            console.log('확인 완료');
            Swal.fire({
              title: '<span style="font-size: 20px;">우리아이에게\n 송금이 완료되었습니다.</span>',
              text: '찾아주셔서 감사합니다',
              icon: 'success',
              customClass: {
                // 성공 알림 모달에 사용할 클래스 추가
                container: 'custom-swal-container',
              },
              timer: 2000, // 6초 후에 모달 창을 자동으로 닫도록 설정 (밀리초 단위)
            });
          
          setDisabled(false);
        }})
        .catch((error) => {
          console.error('API 요청 실패:', error);
          // 실패한 경우 에러 처리
          // 에러 메시지를 사용하여 사용자에게 알림을 표시할 수 있습니다.
        })
        .finally(() => {
          setDisabled(false);
        });
      }else{
        Swal.fire('송금이 취소되었습니다.', '', 'info');
        setDisabled(false);
      }
    });
  }
  

  return (
    <SendButtonContainer>
       <SendButtonBox 
       onClick={handleSendButtonClick}  disabled={disabled} >송금하기</SendButtonBox>
    </SendButtonContainer>
  );
  }


export default SendButtonComponent;
