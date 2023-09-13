import React, { useState } from 'react';
import styled from 'styled-components';

// SendButton.js
import Swal from 'sweetalert2'; // SweetAlert2 라이브러리 import
import './css/SendButton.css';
import axios from 'axios';

const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTY5NDQxMDYxMiwiZXhwIjoxNjk3MDAyNjEyfQ.REnYwc1UCodiCGsXPRNiTPq8cCUSBQP_On95izs_c54";

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

const AccountDetailInfoButton = ({disabled, setDisabled, childId}) => {
  const getAccountDetailButtonClick = () => {
    // TODO : 송금하기 이동 ajax 연결
      setDisabled(true);
      // API 요청 보내기
      var url = "/management/send";
      var jsonData = {
        "childId": childId,
        "amount": 0 // 초기값은 null로 설정
      };
      
      // 첫 번째 SweetAlert2 모달 - 송금을 진행할지 묻는 모달
      Swal.fire({
        title: '<span style="font-size: 20px;">송금을 진행하시겠습니까?</span>',
        text: '',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#D9D9D9',
        confirmButtonText: '예',
        cancelButtonText: '아니오',
        reverseButtons: true,
        customClass: {
          // 모달에 사용할 클래스 추가
          container: 'custom-swal-container',
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // 두 번째 SweetAlert2 모달 - 금액 입력 칸을 가진 모달
          Swal.fire({
            title: '<span style="font-size: 20px;">얼마를 송금하시겠습니까?</span>',
            input: 'number', // 숫자 입력 필드를 사용
            inputLabel: '송금 금액',
            inputPlaceholder: '금액을 입력하세요',
            showCancelButton: true,
            inputValidator: (value) => {
              // 금액이 유효한지 확인
              if (!value || value <= 0) {
                return '금액을 올바르게 입력하세요.';
              }else{
                
              }
            },
            icon: 'question',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#D9D9D9',
            confirmButtonText: '확인',
            cancelButtonText: '취소',
            reverseButtons: true,
            customClass: {
              // 모달에 사용할 클래스 추가
              container: 'custom-swal-container',
            },
          }).then((amountResult) => {
            if (amountResult.isConfirmed) {
              const amountToSend = amountResult.value;
             
              jsonData.amount = amountToSend;
              axios
                .post(url, jsonData, {
                  headers: { Authorization: token },
                })
                .then((response) => {
                  if (response.data) {
                    // 성공 모달 표시
                    Swal.fire({
                      title: '<span style="font-size: 20px;">우리아이에게 송금이 완료되었습니다.</span>',
                      text: '찾아주셔서 감사합니다',
                      icon: 'success',
                      customClass: {
                        // 성공 알림 모달에 사용할 클래스 추가
                        container: 'custom-swal-container',
                      },
                      timer: 2000, // 2초 후에 모달 창을 자동으로 닫도록 설정 (밀리초 단위)
                    });
                    setDisabled(false);
                  }
                })
                .catch((error) => {
                  console.error('API 요청 실패:', error);
                  // 실패한 경우 에러 처리
                  // 에러 메시지를 사용하여 사용자에게 알림을 표시할 수 있습니다.
                })
                .finally(() => {
                  setDisabled(false);
                });
            } else {
              Swal.fire('송금이 취소되었습니다.', '', 'info');
              setDisabled(false);
            }
          });
        } else {
          Swal.fire('송금이 취소되었습니다.', '', 'info');
          setDisabled(false);
        }
      });
  
    }


  return (
    <SendButtonContainer>
      <Button onClick={getAccountDetailButtonClick}  disabled={disabled}>송금하기</Button>
    </SendButtonContainer>
  );
};

export default AccountDetailInfoButton;
