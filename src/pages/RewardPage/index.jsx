import styled from "styled-components";
import { TopContainer } from "../../components/TopContainer";
import { TopNavigationBar } from "../../components/TopNavigationBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { PRIMARY } from '@utility/COLORS'
import { GoCheckCircle } from "react-icons/go";
import { ChildUnderSection } from "@components/MissionItem/style";
import { AiFillDollarCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const MainContent = styled.div`
    height : 100%
`;

const Container = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 12px;
  opacity: 1;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
`;

const RewardContainer = styled(Container)`
  /* RewardContainer에 대한 스타일을 추가할 수 있습니다. */
  /* 예시: */
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  height : 95px;
  margin: 9px 0px;

  display : flex;
`;

const MissionContainer = styled(Container)`
  /* MissionContainer에 대한 스타일을 추가할 수 있습니다. */
  /* 예시: */
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
  margin: 6px 0px;
`;

const SeparateContainer = styled.div`
  /* SeparateContainer에 대한 스타일을 추가할 수 있습니다. */
  /* 예시: */
  margin: 20px 0px;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content:space-between;
  height : 85px;
  padding : 0px;

  flex: 1;
  margin: -4px 0px;
  border-radius: 12px;
  opacity: 1;
`;

const LeftComponent = styled.div`
  flex: 5; /* 크기를 더 크게 조절 */
  display: flex;
  flex-direction: column;
  justify-content: center; /* 텍스트를 세로 중앙에 정렬 */
`;


const RightComponent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const UserInfo = styled.div`
  font-size: 16px;
  font-weight: bold;
  
`;

const Balance = styled.div`
  font-size: 22px;
  padding : 5px 0px;
`;

const CustomButton = styled.button`
  background: ${(props) => props.backgroundcolor || '#84888B'};
  color: ${(props)=>props.fontcolor};
  border-radius: 9px;
  padding: 10px 20px;
  border: none;
  margin: 2px 0px;
  width: 110px;
  font-family:sdMe;
`;


const InternalComponent = styled.div`
  /* 내부 컴포넌트 1에 대한 스타일을 추가할 수 있습니다. */
  width : 156px;
  border-radius: 12px;
  display:flex;
  flex-direction : column;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
`;

const Name = styled.div`
  padding: 10px 10px 4px 10px;
  text-align: center; /* 텍스트 가운데 정렬 */
  font-weight: light; /* 굵은 글꼴 */
  text-align: left; /* 왼쪽 정렬로 변경 */
  font-size : 13px;
`

const Amount = styled.div`

  padding: 6px 17px;
  text-align: right; /* 텍스트 가운데 정렬 */
  font-family:sdBo;
  color: #4D6DCC;
  font-size : 18px;
`

// 자식 컴포넌트 스타일
const ChildComponent = styled.div`
  padding: 10px;
  margin: 5px;
  border-radius: 4px;
  font-family:sdMe;
  font-size:20px;
`;

// 부모 컴포넌트 스타일
const ParentComponent = styled.div`
  // height: 300px; /* 높이를 원하는 크기로 설정 (스크롤이 나타날 부분) */
  overflow-y: auto; /* 스크롤을 표시하기 위한 스타일 */
  padding: 6px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Container2 = styled.div`
  margin: 6px; /* 원하는 마진 값으로 조정하세요 */
`;

const MissionTitle = styled.div`
  font-size:17px;
  display: flex; /* Flexbox를 사용하여 내부 요소를 정렬합니다 */
  line-height: 29px;
`

const MissionItem = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  /* 미션 아이템 스타일을 추가하세요 */
`;

const MissionText = styled.div`
  display: flex;
  flex-direction:row;
  margin-left: 10px;
  /* 미션 텍스트 스타일을 추가하세요 */
  margin : 14px 0px;
  width : 261px;
  justify-content:space-between;
`;

const MissionAmount=styled.div`
  font-size:12px;
  font-family:sdMe;
  text-align: center; /* 글자를 가운데 정렬 */
  padding:2px 5px;
  background: transparent; /* 배경 색을 투명으로 설정 */
  color: ${(props) => props.backgroundcolor || '#D56F88'}; /* props로 전달된 backgroundColor를 사용하거나 기본값으로 #D56F88 사용 */
  border-radius: 7px;
  height: 24px; /* 높이를 조정하세요 */
  line-height: 24px; /* 텍스트를 세로로 가운데 정렬 */
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* 그림자 효과를 추가합니다 */
  // /* 경계선 스타일을 설정합니다 */
  border: 2px solid ${(props) => props.bordercolor || '#84888B'}; /* props로 전달된 backgroundColor를 사용하거나 기본값으로 #84888B 사용 */
`

const UnderSection = styled.div`
display: flex;
justify-content:right;
bottom: 0;
height: 40px;
right:40px;
p{
    margin-top:10px;
}
span{
    color: ${PRIMARY};
}
.moneyIcon{
    color: ${PRIMARY};
}
line-height: 24px; /* 텍스트를 세로로 가운데 정렬 */
`

export const RewardPage = () => {
  const [responseData, setResponseData] = useState({
    rewardCompleteAmount: '',
    rewardConfirmWaitAmount: '',
    thisMonthInterestIncome: '',
  });
  const [missionData, setMissionData] = useState({
    missionContents: [],
    notCompleteMissionsAmount: '',
  });
  console.log(responseData);
  console.log(missionData);
  console.log(responseData.rewardCompleteAmount == "0");

  useEffect(() => {
    fetchRewardData();
    fetchMissionData();
  }, []);

  const fetchRewardData = async () => {
    try {
      const response = await axios.get('/reward');
      const data = response.data;
      setResponseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchMissionData = async () => {
    try {
      const response = await axios.get('/reward/notcomplete');
      const data = response.data; // 응답으로 받은 JSON 데이터
      setMissionData(data); // 상태 변수에 데이터를 설정합니다.
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // 출금 성공 메시지를 관리하는 상태 변수
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  // 출금 요청 함수
  const handleWithdraw = async () => {
    try {
      // '/reward/withdraw'로 GET 요청 보내기
      const response = await axios.get('/reward/withdraw');

      // 요청이 성공하면 출금 성공 메시지를 표시
      if (response.status === 200) {
        setWithdrawSuccess(true);

        responseData.rewardCompleteAmount
        // SweetAlert를 사용하여 출금 완료 메시지를 표시
        Swal.fire({
          icon: 'success', // 성공 아이콘 표시
          title: '출금 완료',
          text: '출금이 성공적으로 완료되었습니다.',
          confirmButtonColor: PRIMARY, // 확인 버튼 색상 설정
        });

        window.location.reload(); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  };

  const grayIconStyle = {
    color: 'gray', // 아이콘의 색상을 회색으로 설정
    fontSize: 27,   // 아이콘의 크기 설정
    paddingRight:10
    
  };



  return (
    <TopContainer>
      <TopNavigationBar title={'보상금 저장소'} />
      <MainContent>
      <RewardContainer>
          <LeftComponent>
            <UserInfo>
              이재용님의 보상금 통장
              <Balance>{responseData.rewardCompleteAmount}원</Balance>
            </UserInfo>
          </LeftComponent>
          <RightComponent>
            <CustomButton 
            backgroundcolor="#84888B" 
            fontcolor="#FFFFFF"
            
            >보상내역</CustomButton>
            <CustomButton 
            backgroundcolor={PRIMARY} 
            fontcolor="#010812"
            onClick={handleWithdraw} // 출금 버튼을 클릭하면 handleWithdraw 함수 실행
            disabled={responseData.rewardCompleteAmount == "0"} // rewardCompleteAmount가 0일 때 버튼 비활성화
            >출금하기</CustomButton>
          </RightComponent>
        </RewardContainer>
        <SeparateContainer>
          <InternalComponent>
              <Name>
                승인 대기 중인 보상금
              </Name>
              <Amount>
                {responseData.rewardConfirmWaitAmount}원
              </Amount>
          </InternalComponent>
          <InternalComponent>
             <Name>
                이번 달 예상 이자수익
              </Name>
              <Amount>
                {responseData.thisMonthInterestIncome}원
              </Amount>
          </InternalComponent>
        </SeparateContainer>
        <Container2>
          <MissionTitle>미완료 미션</MissionTitle>
          <MissionContainer>
            <ParentComponent> 
              
              {missionData.missionContents.map((mission, index) => (
                <MissionItem key={index}>
                  <GoCheckCircle style={grayIconStyle} />
                  <MissionText>
                    <MissionTitle>{mission.title}</MissionTitle>
                    <MissionAmount backgroundcolor={'#84888B'} bordercolor={PRIMARY}>보상금 {mission.amount}</MissionAmount>
                  </MissionText>
                </MissionItem>
              ))}
            </ParentComponent>
          </MissionContainer>
          <UnderSection>
              <p> <AiFillDollarCircle className='moneyIcon' /> 미션 보상금 <span>{missionData.notCompleteMissionsAmount}</span></p>
          </UnderSection>
        </Container2>
      </MainContent>
    </TopContainer>
  );
};
