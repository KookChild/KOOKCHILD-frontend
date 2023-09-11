import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion' // Framer Motion 모듈 가져오기
import c1 from './img/아이1.jpeg'
import c2 from './img/아이2.jpg'
import c3 from './img/아이3.jpg'
import c4 from './img/아이4.jpg'
import MoveChildGraphButton from './MoveChildGraphButton'
import AccountSendButton from './AccountSendButton'
import AccountDetailInfoButton from './AccountDetailInfoButton'

const BankContentContainer = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px; /* 원하는 간격으로 조절 */
  padding: 0;
`

const PictureSelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px 0;
`

const BankInfoContainer = styled.div`
  padding: 10px 0;
  background-color: #ececec;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`
const MonthlyContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MonthlyContent = styled.div`
  width: 100%;
  height: 120px;
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
  background-color: #f0f0f0; /* 배경색을 원하는 색상으로 변경 */
  padding: 0;
`
const MonthlyConsumption = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
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
const MoveChildGraphButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`
const AccountButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px; /* 요소 사이의 간격을 조절합니다. */
`
const AccountDescription = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  background-color: #f0f0f0; /* 배경색을 원하는 색상으로 변경 */
`
const BankContent = ({ selectedPicture, childName, setSelectedPicture }) => {
  const controls = useAnimation()

  useEffect(() => {
    // selectedPicture가 변경될 때마다 애니메이션 적용
    controls.start({ opacity: 0, transition: { duration: 0.5 } })
    setTimeout(() => {
      setSelectedPicture(selectedPicture)
    }, 500) // 애니메이션 지속 시간 이후에 다시 초기 이미지로 설정
  }, [selectedPicture])

  // 이미지 경로에 따라 c1, c2, c3, c4로 대체
  if (selectedPicture === './img/아이1.jpeg') {
    selectedPicture = c1
  } else if (selectedPicture === './img/아이2.jpg') {
    selectedPicture = c2
  } else if (selectedPicture === './img/아이3.jpg') {
    selectedPicture = c3
  } else if (selectedPicture === './img/아이4.jpg') {
    selectedPicture = c4
  }

  return (
    <BankContentContainer>
      <PictureSelectContainer>
        {selectedPicture == null ? (
          <div id="comment">송금하실 자녀를 선택해주세요</div>
        ) : (
          <motion.img
            initial={{ opacity: 0 }} // 초기 상태
            animate={{ opacity: 1 }} // 애니메이션 적용
            exit={{ opacity: 0 }} // 나가기 애니메이션 설정
            transition={{ duration: 0.5 }} // 애니메이션 지속 시간 설정
            key={selectedPicture} // 이미지 변경 시에 컴포넌트를 새로 렌더링하기 위한 키 설정
            src={selectedPicture}
            alt="preview-img"
            className="show"
            style={{
              objectFit: 'cover', // 이미지를 컨테이너에 맞게 크기 조정하고 비율 유지
              width: '100%', // 컨테이너 너비에 맞게 이미지 가로 크기 조정
              height: '100%', // 컨테이너 높이에 맞게 이미지 세로 크기 조정
            }}
          />
        )}
      </PictureSelectContainer>
      <BankInfoContainer>
        {childName === '' ? (
          <p>자녀를 선택해서 송금하세요</p>
        ) : (
          <>
            <AccountDescription>
              <br/>
                <span id="name">{childName}</span>
                님의 계좌 <br />
                계좌번호: 1223-4422-3433
              <AccountButtons>
                <AccountDetailInfoButton />
                <AccountSendButton />
              </AccountButtons>
            </AccountDescription>

            {/* childName이 있을 때만 MonthlyContent를 보이도록 설정 */}
            {childName && (
              <MonthlyContentContainer>
                <MonthlyContent>
                  <MonthlyItem>
                    <MonthlyDetail>
                      <br></br>우리 아이 <br></br>이번 달 소비<br></br>
                      1,000,000원
                    </MonthlyDetail>
                  </MonthlyItem>
                  <MonthlyItem>
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
              </MonthlyContentContainer>
            )}
          </>
        )}
      </BankInfoContainer>
    </BankContentContainer>
  )
}

export default BankContent
