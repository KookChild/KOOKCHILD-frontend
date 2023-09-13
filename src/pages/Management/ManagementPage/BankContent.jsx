
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion'; // Framer Motion 모듈 가져오기
import c1 from './img/아이1.jpg';
import c2 from './img/아이2.jpg';
import c3 from './img/아이3.jpg';
import c4 from './img/아이4.jpg';

import MoveChildGraphButton from './MoveChildGraphButton'
import AccountSendButton from './AccountSendButton'
import AccountDetailInfoButton from './AccountDetailInfoButton'
import axios from 'axios';

const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTY5NDQxMDYxMiwiZXhwIjoxNjk3MDAyNjEyfQ.REnYwc1UCodiCGsXPRNiTPq8cCUSBQP_On95izs_c54";

const BankContentContainer = styled.div`
  width: 100%;
  height : 100%;
  padding: 21px 0px;
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
  height : 320px;
  display : flex;
  flex-direction : column;
`
const MonthlyContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin : 10px 0px;
`
const MonthlyContent = styled.div`

  width: 360px;
  height: 91px;
  margin: 10px 0px;
  overflow: hidden;

  padding: 0;
  display: flex; /* MonthlyItem을 가로로 배치하기 위해 추가 */
  // 가로 배치하는데 좌우로 벌어지게
  justify-content: center;
  gap: 12px;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

const MonthlyItem = styled.div`

width: 160px;
height: 90px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 2px #00000029;
border-radius: 12px;
opacity: 1;
border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  display: flex;
  flex-direction : column;
  justify-content:center;
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
  height: 130px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  height : 320px;
  background-color: #ececec;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const ChildName = styled.span`
span {
  /* UI Properties */
  text-align: left;
  color: #010812;
  padding: 10px;
}

/* 추가한 스타일 */
background-color: #f9c515;
margin : 10px 0px;
height: 40px;
width : auto;
border-radius: 10px;
border: 1px solid #ccc;
padding: 5px 10px;
font-size: 14px;
`

const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 컬럼 방향으로 아래로 나열 */
  align-items: center; /* 수평 가운데 정렬 */
  gap: 20px; /* 각 요소 사이의 간격 조절 */
  text-align: center; /* 텍스트 가운데 정렬 */
  margin-top: 20px; /* 원하는 간격 설정 */
  height : 358px;
`;

const InfoBox = styled.div`

background-color: #f9c515;
  width: 250px; /* 너비를 더 넓게 설정 */
  height: 60px; /* 높이 설정 */
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  padding: 10px; /* 내부 여백 설정 */
  border-radius: 10px; /* 라운드된 모서리 설정 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  border-radius: 10px;
  border: 1px solid #ccc;
`;
const InfoText = styled.p`
  /* <p> 태그에 대한 스타일 설정 */
  margin: 0; /* 기본 마진 제거 */
  font-size: 16px; /* 글꼴 크기 설정 */
  color: #333; /* 글꼴 색상 설정 */
  /* 다른 스타일을 추가하세요. */
`;


const BankContent = ({ selectedPicture, disabled, setDisabled
, childName, childId, accountNum, amount, notInAmount }) => {
  const controls = useAnimation();
  const [hasChange, setHasChange] = useState(false);

  
  return (
    <BankContentContainer>
      <ChildName>{childName}님의 계좌</ChildName>
      <PictureSelectContainer>
          <div>
            
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
                borderRadius: '10px', 
              }}
            />
          </div>
      </PictureSelectContainer>
      <BankInfoContainer>
          <AccountDescription>
              <br/>
         <span id="name">{childName}</span>
            님의 계좌 <br />
            계좌번호: <span id="accountNum">{accountNum}</span>
              <AccountButtons>
                <AccountDetailInfoButton/>
                <AccountSendButton disabled={disabled} setDisabled={setDisabled} childId ={childId}
                hasChange={hasChange} setHasChange={setHasChange}/>
              </AccountButtons>
          </AccountDescription>

            {/* childName이 있을 때만 MonthlyContent를 보이도록 설정 */}
          <MonthlyContentContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }} // 초기 상태
              animate={{ opacity: 1, y: 0 }} // 애니메이션 적용
              exit={{ opacity: 0, y: 20 }} // 나가기 애니메이션 설정
              transition={{ duration: 0.5 }} // 애니메이션 지속 시간 설정
            >
              <MonthlyContent>
                <MonthlyItem>
                    우리 아이 <br></br>이번 달 소비<br></br>
                    {notInAmount}원
                </MonthlyItem>
                <MonthlyItem>
                   우리 아이 <br></br>이번 달 저축<br></br>
                     {amount}원
                    
                </MonthlyItem>
              </MonthlyContent>
           
            </motion.div>
            </MonthlyContentContainer>
           
            <MoveChildGraphButtonContainer>
              <motion.div
                initial={{ opacity: 0, y: 20 }} // 초기 상태
                animate={{ opacity: 1, y: 0 }} // 애니메이션 적용
                exit={{ opacity: 0, y: 20 }} // 나가기 애니메이션 설정
                transition={{ duration: 0.5 }} // 애니메이션 지속 시간 설정
              >
                <MoveChildGraphButton />
              </motion.div>
            </MoveChildGraphButtonContainer>
      </BankInfoContainer>
    </BankContentContainer>
  )
}

export default BankContent
