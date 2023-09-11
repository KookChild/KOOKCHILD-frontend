// SendButton.js
import React from 'react'
import styled from 'styled-components'

const SendButtonContainer = styled.div`
//   text-align: right; /* 버튼을 오른쪽으로 정렬 */
  position: relative; /* 버튼을 상대적으로 위치 설정 */
  bottom: 0;
  right: 0;
  margin: 20px; /* 원하는 여백 추가 */
`

const Button = styled.button`
  background-color: #f9c515;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
`



const AccountDetailInfoButton = () => {
  const getAccountDetailButtonClick = () => {
    //TODO : 계좌 상세 정보 페이지로 이동 ajax 연결
    console.log("계좌 상세정보 페이지 버튼 입력됨.")
  }

  return (
    <SendButtonContainer>
      <Button onClick={getAccountDetailButtonClick}>계좌 상세 정보</Button>
    </SendButtonContainer>
  )
}

export default AccountDetailInfoButton
