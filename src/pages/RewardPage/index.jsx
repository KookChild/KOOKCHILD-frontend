import styled from "styled-components";
import { TopContainer } from "../../components/TopContainer";
import { TopNavigationBar } from "../../components/TopNavigationBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { PRIMARY } from '@utility/COLORS'
import { GoCheckCircle } from "react-icons/go";

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
  background: ${(props) => props.backgroundColor || '#84888B'};
  color: ${(props)=>props.fontColor};
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
  font-family:sdBo;
  font-size:17px;
`

const MissionItem = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  margin-right: 20px;
  /* 미션 아이템 스타일을 추가하세요 */
`;

const MissionText = styled.div`
  display: flex;
  flex-direction:row;
  margin-left: 10px;
  /* 미션 텍스트 스타일을 추가하세요 */
  margin : 14px 0px;
  width : 236px;
  justify-content:space-between;
`;

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

  useEffect(() => {
    fetchRewardData();
    fetchMissionData();
    console.log(responseData);
    console.log(missionData);
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

  const fetchWithdraw = async () => {
    try {
      const response = await axios.get('/reward/withdraw');
      const data = response.data; // 응답으로 받은 JSON 데이터
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
            <CustomButton backgroundColor="#84888B" fontColor="#FFFFFF">보상내역</CustomButton>
            <CustomButton backgroundColor={PRIMARY} fontColor="#010812">출금하기</CustomButton>
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
                    <MissionTitle style={{color:'#D56F88', fontFamily:'sdEB'}}>D - {mission.dates}</MissionTitle>
                  </MissionText>
                </MissionItem>
              ))}
            </ParentComponent>
          </MissionContainer>
        </Container2>
      </MainContent>
    </TopContainer>
  );
};
