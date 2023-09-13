import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MissionItem } from '@components'
import {
  MissionListContainer,
  ChildItemContainer,
  ChildListContainer,
  TabContainer,
  Tab,
  ButtonContainer,
  AddMissionButton,
  MissionItemContainer,
  Header,
  HeaderContent,
  HeaderImage,
  HeaderTitle,
} from './style'
import imgSrc from './img/Bear.png'
import imgSrc2 from './img/ALL.jpeg'
import imgSrc3 from './img/prefer.png'
import { getParentMissionByChild } from '@apis'
import { TopContainer } from '@components'
export const MissionParentViewPage = () => {
  const [missions, setMissions] = useState([])
  const [childs, setChilds] = useState([])
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const navigate = useNavigate()
  const [selectedChildIndex, setSelectedChildIndex] = useState(0)

  const handleMissionClick = missionId => {
    navigate(`/mission/detail/${missionId}`)
  }

  const handleChildClick = childId => {
    setSelectedChildIndex(childId)
  }

  useEffect(() => {
    // 초기 로드 혹은 selectedChildIndex가 변경될 때마다 API 호출
    const fetchData = async () => {
      try {
        const response = await getParentMissionByChild(selectedChildIndex)
        setMissions(response.missionLists)
        setChilds(response.childLists)
      } catch (error) {
        console.error('Error fetching the data:', error)
      }
    }

    fetchData()
  }, [selectedChildIndex])

  return (
    <TopContainer>
      <Header>
        <HeaderContent>
          <HeaderImage src={imgSrc3} />
          <HeaderTitle>자녀금융관리</HeaderTitle>
        </HeaderContent>
      </Header>
      <ChildListContainer>
        {/* 전체 보기 아이템 */}
        <ChildItemContainer
          isSelected={selectedChildIndex === 0}
          onClick={() => handleChildClick(0)}
        >
          <img src={imgSrc2} alt="전체 보기" />
          <p>전체보기</p>
        </ChildItemContainer>

        {/* 아이들의 리스트 */}
        {childs.map(child => (
          <ChildItemContainer
            key={child.childId}
            isSelected={selectedChildIndex === child.childId}
            onClick={() => handleChildClick(child.childId)}
          >
            <img src={imgSrc} alt={child.childName} />
            <p>{child.childName}</p>
          </ChildItemContainer>
        ))}
      </ChildListContainer>
      {/* Tabs */}
      <TabContainer>
        <Tab
          isSelected={selectedTabIndex === 0}
          onClick={() => {
            setSelectedTabIndex(0)
            // 추가로 미션 탭을 클릭했을 때의 로직을 여기에 작성할 수 있습니다.
          }}
        >
          미션
        </Tab>
        <Tab
          isSelected={selectedTabIndex === 1}
          onClick={() => {
            setSelectedTabIndex(1)
            // 추가로 챌린지 탭을 클릭했을 때의 로직을 여기에 작성할 수 있습니다.
          }}
        >
          챌린지
        </Tab>
        <Tab
          isSelected={selectedTabIndex === 2}
          onClick={() => {
            setSelectedTabIndex(2)
            // 추가로 퀴즈 탭을 클릭했을 때의 로직을 여기에 작성할 수 있습니다.
          }}
        >
          퀴즈
        </Tab>
      </TabContainer>
      <ButtonContainer>
        <AddMissionButton
          onClick={() => {
            navigate('/mission/create')
          }}
        >
          미션 추가하기
        </AddMissionButton>
      </ButtonContainer>

      {/* Mission List */}
      <MissionListContainer>
        {missions.map((mission, index) => (
          <MissionItemContainer
            isEven={index % 2 === 0}
            onClick={() => handleMissionClick(mission.id)}
            key={index}
          >
            <MissionItem
              isEven={index % 2 === 0}
              missionTitle={mission.title}
              missionReward={`${mission.reward}원`}
              missionDate={
                mission.deadline !== 'null-null'
                  ? mission.deadline
                  : '기한 없음'
              }
              parentConfirm={mission.parentConfirm}
              childConfirm={mission.childConfirm}
            />
          </MissionItemContainer>
        ))}
      </MissionListContainer>
    </TopContainer>
  )
}
