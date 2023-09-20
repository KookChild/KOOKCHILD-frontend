
import React from 'react';
import { motion, useAnimation } from 'framer-motion'; // Framer Motion 모듈 가져오기

import MoveChildGraphButton from './MoveChildGraphButton'
import AccountSendButton from './AccountSendButton'
import AccountDetailInfoButton from './AccountDetailInfoButton'
import { 
  AccountButtons, 
  AccountDescription, 
  AccountInfo, 
  AccountInfoContainer, 
  BankContentContainer, 
  BankInfoContainer, 
  ChildName, 
  MonthlyContent, 
  MonthlyContentContainer, 
  MonthlyItem, 
  MoveChildGraphButtonContainer, 
  PictureSelectContainer, 
  StyledAccountNum, 
  StyledChildName, 
  StyledSpan,
  ThisMonthMoney,
  ThisMonthType
} from './style';


const BankContent = ({ selectedPicture, disabled, setDisabled
, childName, accountNum, spendingAmount, savingAmount, childId, balance }) => {
  
  return (
    <BankContentContainer>
      {/* <ChildName>{childName}님의 계좌</ChildName> */}
      <PictureSelectContainer>
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
                height: '177px', // 컨테이너 높이에 맞게 이미지 세로 크기 조정
              }}
            />
            <AccountInfo>
                <AccountInfoContainer>
                  <StyledChildName>{childName}</StyledChildName>
                  <StyledAccountNum>{accountNum}</StyledAccountNum>
                </AccountInfoContainer>
                <AccountButtons>
                  <AccountDetailInfoButton/>
                  <AccountSendButton disabled={disabled} setDisabled={setDisabled} childId ={childId}
                  balance={balance}/>
              </AccountButtons>
            </AccountInfo>
      </PictureSelectContainer>
      <BankInfoContainer>
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
                    <ThisMonthType>
                      이번달 소비<br></br>
                    </ThisMonthType>
                    <ThisMonthMoney>
                      -{spendingAmount}원
                    </ThisMonthMoney>
                </MonthlyItem>
                <MonthlyItem>
                    <ThisMonthType>
                      이번달 저축<br></br>
                    </ThisMonthType>
                    <ThisMonthMoney>
                      +{savingAmount}원
                     </ThisMonthMoney>
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
                <MoveChildGraphButton childId = {childId}/>
              </motion.div>
            </MoveChildGraphButtonContainer>
      </BankInfoContainer>
    </BankContentContainer>
  )
}

export default BankContent
