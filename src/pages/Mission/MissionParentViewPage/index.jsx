import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MissionItem } from '@components';
import {
  MissionListContainer,
  ChildItemContainer,
  ChildListContainer,
  TabContainer,
  Tab,
  ButtonContainer,
  AddMissionButton,
  MissionItemContainer,
  RadioButtonGroup,
  RadioLabel,
} from './style';
import imgSrc from './img/Bear.png';
import imgSrc2 from './img/ALL.jpeg';
import { getParentMissionByChild, getChildQuizList } from '@apis';
import { TopContainer, TopNavigationBar } from '@components';
import { Quiz } from './Quiz';
import { selectedChild } from '../../../recoil';
import { useSetRecoilState } from 'recoil';

export const MissionParentViewPage = () => {
  const setSelectedChildId = useSetRecoilState(selectedChild);
  const [missions, setMissions] = useState([]);
  const [childs, setChilds] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const navigate = useNavigate();
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);
  const [missionFilter, setMissionFilter] = useState('ongoing');
  const [quizData, setQuizData] = useState([]);
  const parent = localStorage.getItem('parent');

  const handleMissionClick = missionId => {
    navigate(`/mission/detail/${missionId}`);
  };

  const handleChildClick = childId => {
    setSelectedChildIndex(childId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTabIndex === 0) {
          const response = await getParentMissionByChild(
            selectedChildIndex,
            missionFilter,
          );
          setMissions(response.missionLists);
          setChilds(response.childLists);
        } else if (selectedTabIndex === 2) {
          const response = await getChildQuizList(selectedChildIndex);
          setQuizData(response.childLists);
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };
    fetchData();
  }, [selectedChildIndex, missionFilter, selectedTabIndex]);

  return (
    <TopContainer>
      <TopNavigationBar title={'미션, 챌린지 관리'} />
      <ChildListContainer>
        <ChildItemContainer
          selected={selectedChildIndex === 0}
          onClick={() => handleChildClick(0)}
        >
          <img src={imgSrc2} alt="전체 보기" />
          <p>전체보기</p>
        </ChildItemContainer>

        {childs.map(child => (
          <ChildItemContainer
            key={child.childId}
            selected={selectedChildIndex === child.childId}
            onClick={() => handleChildClick(child.childId)}
          >
            <img src={imgSrc} alt={child.childName} />
            <p>{child.childName}</p>
          </ChildItemContainer>
        ))}
      </ChildListContainer>

      <TabContainer>
        <Tab selected={selectedTabIndex === 0} onClick={() => setSelectedTabIndex(0)}> 미션 </Tab>
        <Tab selected={selectedTabIndex === 1} onClick={() => setSelectedTabIndex(1)}> 챌린지 </Tab>
        <Tab selected={selectedTabIndex === 2} onClick={() => setSelectedTabIndex(2)}> 퀴즈 </Tab>
      </TabContainer>
      {selectedTabIndex === 0 && (
        <div>
          <RadioButtonGroup>
            <RadioLabel>
              <input
                type="radio"
                value="ongoing"
                checked={missionFilter === 'ongoing'}
                onChange={e => setMissionFilter(e.target.value)}
              />
              진행중
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="requested"
                checked={missionFilter === 'requested'}
                onChange={e => setMissionFilter(e.target.value)}
              />
              요청
            </RadioLabel>
            <RadioLabel>
              <input
                type="radio"
                value="success"
                checked={missionFilter === 'success'}
                onChange={e => setMissionFilter(e.target.value)}
              />
              완료
            </RadioLabel>
          </RadioButtonGroup>

          <ButtonContainer>
            <AddMissionButton onClick={() => navigate('/mission/create')}>
              미션 추가하기
            </AddMissionButton>
          </ButtonContainer>

          <MissionListContainer>
            {missions.map((mission, index) => (
              <MissionItemContainer
                even={index % 2 === 1}
                onClick={() => handleMissionClick(mission.id)}
                key={index}
              >
                <MissionItem
                  even={index % 2 === 1}
                  missionTitle={mission.title}
                  missionReward={`${mission.reward}원`}
                  missionDate={
                    mission.deadline !== 'null-null'
                      ? mission.deadline
                      : '기한 없음'
                  }
                  parentConfirm={mission.parentConfirm}
                  childConfirm={mission.childConfirm}
                  parent={parent}
                />
              </MissionItemContainer>
            ))}
          </MissionListContainer>
        </div>
      )}

      {selectedTabIndex === 1 && (
        <div></div>
      )}

      {selectedTabIndex === 2 && (
        <div>
          <Quiz quizData={quizData} />
        </div>
      )}
    </TopContainer>
  );
};
