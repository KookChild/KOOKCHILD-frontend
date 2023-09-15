import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MissionItem } from '@components'
import {
  Header,
  HeaderContent,
  HeaderImage,
  HeaderTitle,
  MenuContainer,
  Dropdown,
  HistoryMissionButton,
  MissionItemContainer,
  MissionListContainer,
  MissionHeaderContainer,
} from './style'
import { getMissions } from '@apis'
import prefer from './img/prefer.png'
import { TopContainer } from '@components'
export const MissionChildViewPage = () => {
  const [ongoingMissions, setOngoingMissions] = useState([])
  const [requestMissions, setRequestMissions] = useState([])
  const [sort, setSort] = useState('newest')
  const navigate = useNavigate()

  const handleMissionClick = missionId => {
    navigate(`/mission/detail/${missionId}`)
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMissions(sort)
      setRequestMissions(data.requestMissionLists)
      setOngoingMissions(data.ongoingMissionLists)
    }
    fetchData()
  }, [sort])

  const handleDropdownChange = e => {
    const selectedValue = e.target.value
    setSort(selectedValue)
  }

  return (
    <TopContainer>
      <Header>
        <HeaderContent onBackClick={() => navigate(-1)}>
          <HeaderImage src={prefer} />
          <HeaderTitle>미션상세페이지</HeaderTitle>
        </HeaderContent>
      </Header>
      <MenuContainer>
        <h2>미션</h2>
        <HistoryMissionButton onClick={() => navigate('/child/mission/childview/history')}>히스토리</HistoryMissionButton>
      </MenuContainer>

      <MissionHeaderContainer>입금 대기중인 미션</MissionHeaderContainer>
      <MissionListContainer>
        {requestMissions.map((mission, index) => (
          <MissionItemContainer
            isEven={0}
            onClick={() => handleMissionClick(mission.id)}
            key={index}
          >
            <MissionItem
              isEven={0}
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
      <MenuContainer>
      <MissionHeaderContainer>진행중인 미션</MissionHeaderContainer>
      <Dropdown onChange={handleDropdownChange}>
        <option value="newest">최신순</option>
        <option value="oldest">오래된순</option>
      </Dropdown>
      </MenuContainer>
      <MissionListContainer>
        {ongoingMissions.map((mission, index) => (
          <MissionItemContainer
            isEven={0}
            onClick={() => handleMissionClick(mission.id)}
            key={index}
          >
            <MissionItem
              isEven={0}
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
