import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion'; // Framer Motion 모듈 가져오기
import c1 from './img/아이1.jpeg';
import c2 from './img/아이2.jpg';
import c3 from './img/아이3.jpg';
import c4 from './img/아이4.jpg';
import axios from 'axios';
const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJlbnQyQGdtYWlsLmNvbSIsImlhdCI6MTY5NDQxMDYxMiwiZXhwIjoxNjk3MDAyNjEyfQ.REnYwc1UCodiCGsXPRNiTPq8cCUSBQP_On95izs_c54";

const BankContentContainer = styled.div`
  width: 100%;
  height: 200px;
  margin: 20px 0px;
  padding: 0;
`;

const PictureSelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px 0;
`;

const BankInfoContainer = styled.div`
  padding: 10px 0;
  background-color: #ECECEC;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

const BankInfoText = styled.p`
  padding: 10px 0px;
`;

const CommentText = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

const ChildName = styled.div`
  span{
/* UI Properties */
text-align: left;
color: #010812;
padding:10px;
  }
`


const BankContent = ({ selectedPicture, setSelectedPicture }) => {
  const [childName, setChildName] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [childId, setChildId] = useState(2);
  const controls = useAnimation();


 

  useEffect(() => {
       // 이미지 경로에 따라 c1, c2, c3, c4로 대체
    if (selectedPicture === "./img/아이1.jpeg") {
      setSelectedPicture(c1);
      setChildId(2);
    } else if (selectedPicture === "./img/아이2.jpg") {
      setSelectedPicture(c2);
      setChildId(4);
    } else if (selectedPicture === "./img/아이3.jpg") {
      setSelectedPicture(c3);
      setChildId(6);
    } else if (selectedPicture === "./img/아이4.jpg") {
      setSelectedPicture(c4);
      setChildId(7);
    }

    var url = '/management/'+childId;
    axios({
      url: url,
      method : "get",
      headers : {Authorization: token}
    })
    .then((response) => { // axios then 호출
      if(response.data){
        console.log('axios 확인');
        setChildName(response.data.userName);
        setAccountNum(response.data.accountNum);        
     }
    })
    .catch((error) => {
      console.error('API 요청 실패:', error);
      // 실패한 경우 에러 처리
      // 에러 메시지를 사용하여 사용자에게 알림을 표시할 수 있습니다.
    })
    .finally(() => {
    });

  

  }, [selectedPicture]);

  
  return (
    <BankContentContainer>
      <ChildName>{childName != "" ? <span>{childName}님의 계좌</span> : ""}</ChildName>
      <PictureSelectContainer>
        {selectedPicture == null ? (
          <motion.img
          initial={{ opacity: 0 }} // 초기 상태
          animate={{ opacity: 1 }} // 애니메이션 적용
          exit={{ opacity: 0 }} // 나가기 애니메이션 설정
          transition={{ duration: 0.5 }} // 애니메이션 지속 시간 설정
          key={selectedPicture} // 이미지 변경 시에 컴포넌트를 새로 렌더링하기 위한 키 설정
          src={c1}
          alt="preview-img"
          className="show"
          style={{
            objectFit: 'cover', // 이미지를 컨테이너에 맞게 크기 조정하고 비율 유지
            width: '100%', // 컨테이너 너비에 맞게 이미지 가로 크기 조정
            height: '100%', // 컨테이너 높이에 맞게 이미지 세로 크기 조정
          }}
        />
        ) : (
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
              }}
            />
          </div>
        )}
      </PictureSelectContainer>
      <BankInfoContainer>
        {childName === "" ? (
          <p>자녀를 선택해서 송금하세요</p>
        ) : (
          <p>
            <span id="name">{childName}</span>
            님의 계좌 <br />
            계좌번호: <span id="accountNum">{accountNum}</span>
          </p>
        )}
      </BankInfoContainer>
    </BankContentContainer>
  );
}

export default BankContent;
