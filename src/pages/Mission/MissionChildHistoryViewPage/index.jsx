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
  MissionItemContainer,
  MissionListContainer,
  MissionHeaderContainer,
} from './style'
import prefer from './img/prefer.png'
import { TopContainer } from '@components'

export const MissionChildHistoryViewPage = () => {
  const [requestMissions, setRequestMissions] = useState([])
  const [sort, setSort] = useState('newest')
  const navigate = useNavigate()

  const handleMissionClick = missionId => {
    navigate(`/mission/detail/${missionId}`)
  }

  const handleDropdownChange = e => {
    const selectedValue = e.target.value
    setSort(selectedValue)
  }

  return (
    <TopContainer>
      <Header>
        <HeaderContent onBackClick={() => navigate('/path-to-go-back')}>
          <HeaderImage src={prefer} />
          <HeaderTitle>미션상세페이지</HeaderTitle>
        </HeaderContent>
      </Header>
      <MenuContainer>
        <h2>미션</h2>
      </MenuContainer>
      <MenuContainer>
      <MissionHeaderContainer>완료한 미션</MissionHeaderContainer>
      <Dropdown onChange={handleDropdownChange}>
        <option value="newest">최신순</option>
        <option value="oldest">오래된순</option>
      </Dropdown>
      </MenuContainer>
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
    </TopContainer>
  )
}
