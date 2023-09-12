// SendButton.js
import React, { useState } from 'react'
import styled from 'styled-components'
import SendButtonComponent from './SendButtonComponent'

// 화면을 중앙 정렬하는 스타일 컴포넌트
const CenteredContainer = styled.div`
  width: 360px; /* 가로 크기 */
  height: 600px; /* 세로 크기 */
  position: absolute;
  top: 50%; /* 세로 중앙 정렬 */
  left: 50%; /* 가로 중앙 정렬 */
  transform: translate(-50%, -50%); /* 가로, 세로 중앙 정렬을 위한 변환 */
  background-color: #f0f0f0; /* 배경색을 원하는 색상으로 변경 */
  border: 1px solid #ccc; /* 테두리 스타일을 원하는 스타일로 변경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  padding: 20px; /* 내부 여백 설정 */

  display: flex;
  flex-direction: column; /* 자식 컴포넌트를 세로로 배치 */
  justify-content: space-between; /* 컴포넌트들을 위아래로 분배 */
`

const Header = styled.div`
  padding: 10px;
  text-align: center;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`

const HeaderImage = styled.img`
  width: 20px; /* 이미지 너비 조정 */
  height: 20px; /* 이미지 높이 조정 */
  margin-right: 30px; /* 이미지와 title 간의 간격 설정 */
`

const HeaderTitle = styled.h1`
  font-size: 18px; /* title의 글꼴 크기 조정 */
  font-weight: bold; /* title 텍스트 굵게 설정 */
  margin: 0; /* title의 margin 제거 */
`
const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BalanceInfo = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`

const InputField = styled.input`
  width: 200px;
  height: 30px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`

const Footer = styled.div`
  text-align: center;
`
export const SendDetailPage = () => {
  const [amount, setAmount] = useState('')
  const [error, setError] = useState('')

  const Balance = 1000 // 예시로 설정한 Balance 값

  const handleAmountChange = e => {
    const inputAmount = e.target.value
    setAmount(inputAmount)

    if (inputAmount > Balance) {
      setError('입력한 금액이 잔액을 초과합니다.')
    } else {
      setError('')
    }
  }

  return (
    <CenteredContainer>
      <Header>
        <HeaderContent>
          <HeaderImage src={require('./img/prefer.png')} />
          <HeaderTitle>자녀금융관리</HeaderTitle>
        </HeaderContent>
      </Header>
      <MainContent>

        <InputContainer>
          <InputLabel>송금할 금액을 입력하세요</InputLabel>
          <InputField
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
          <br></br>
          <BalanceInfo>현재 잔액: {Balance}원</BalanceInfo>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
      </MainContent>
      <Footer>
        <SendButtonComponent disabled={false} />
      </Footer>
    </CenteredContainer>
  )
}
