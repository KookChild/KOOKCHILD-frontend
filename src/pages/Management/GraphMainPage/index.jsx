import React from 'react'
import styled from 'styled-components'
import SendButtonComponent from './SendButton'
import AccountDetailInfoButton from './AccountDetailInfoButton'
import MoveChildGraphButton from './MoveChildGraphButton'
import AccountSendButton from './AccountSendButton'

const CenteredContainer = styled.div`
  width: 360px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

const Header = styled.div`
  padding: 10px;
  display: flex; /* 자식 요소들을 가로로 나열하기 위해 추가 */
  background-color: #ececec;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 24px; /* 크기를 더 크게 조정 */
  font-weight: bold;
  margin: 0;
`;

const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  display: flex; /* MainContent 컨테이너를 flex 컨테이너로 설정 */
  flex-direction: column; /* 자식 컴포넌트를 세로로 배치 */
  align-items: center; /* 세로 가운데 정렬을 설정 */
`

const Footer = styled.div`
  text-align: center;
`

const AccountContent = styled.div`
  width: 100%;
  height: 200px;
  margin: 20px 0px;
  background-color: #3cb371;
  padding: 0;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`
const AccountNumber = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: normal; /* 텍스트 줄 바꿈을 활성화합니다. */
`
const Balance = styled.p`
  padding: 20px 0px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: normal;
  padding-bottom: 0;
`
const MonthlyContent = styled.div`
  width: 100%;
  height: 150px;
  margin: 20px 0px;
  overflow: hidden;

  padding: 0;
  display: flex; /* MonthlyItem을 가로로 배치하기 위해 추가 */
  // 가로 배치하는데 좌우로 벌어지게
  justify-content: center;
  gap: 12px;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

const MonthlyItem = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 10px;
  background-color: #20b2aa;
  padding: 0;
`

const MoveChildGraphButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: auto;
`

const AccountDescription = styled.p`
  padding: 20px 0px 0px 0px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap; /* 텍스트 줄 바꿈을 금지합니다. */
`

const ButtonContainer = styled.div`
  display: flex; /* Flex 컨테이너로 설정 */
  justify-content: center; /* 가로 가운데 정렬 */
  align-items: center; /* 세로 가운데 정렬 */
  padding: 10px 0px;
`
const MonthlyConsumption = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #20b2aa;
  padding: 0;
`
const MonthlyDetail = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
`

export const GraphMainPage = () => {
  return (
    <CenteredContainer>
      <Header>
        <HeaderContent>
          <HeaderTitle>자녀금융 관리</HeaderTitle>
        </HeaderContent>
      </Header>

      <MainContent>
        <AccountContent>
          <AccountDescription>OO님의 계좌</AccountDescription>
          <AccountNumber>1234-1234-1234</AccountNumber>
          <Balance>1,000,000원</Balance>

          <ButtonContainer>
            <AccountDetailInfoButton />
            <AccountSendButton />
          </ButtonContainer>
        </AccountContent>

        <MonthlyContent>
          <MonthlyItem>
            <MonthlyDetail>
              <br></br>우리 아이 <br></br>이번 달 소비<br></br>
              1,000,000원
            </MonthlyDetail>
          </MonthlyItem>
          <MonthlyItem >
            <MonthlyConsumption>
              <MonthlyDetail>
                <br></br>우리 아이 <br></br>이번 달 저축<br></br>
                2,000,000원
              </MonthlyDetail>
            </MonthlyConsumption>
          </MonthlyItem>
        </MonthlyContent>
        <MoveChildGraphButtonContainer>
          <MoveChildGraphButton />
        </MoveChildGraphButtonContainer>
      </MainContent>
    </CenteredContainer>
  )
}
