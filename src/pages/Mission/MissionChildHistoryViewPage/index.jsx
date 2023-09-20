import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopContainer, TopNavigationBar, MissionItem } from '@components'
import { getMissionsHistory } from '@apis'
import {
  MenuContainer,
  Dropdown,
  MissionItemContainer,
  MissionListContainer,
  MissionHeaderContainer,
  MessageContainer,
  MissionListWrapper
} from './style'

export const MissionChildHistoryViewPage = () => {
  const [successMission, setSuccessMissions] = useState([])
  const [sort, setSort] = useState('newest')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMissionsHistory(sort)
      setSuccessMissions(data.successMissionList)
    }
    fetchData()
  }, [sort])

  const handleMissionClick = missionId => {
    navigate(`/mission/detail/${missionId}`)
  }

  const handleDropdownChange = e => {
    const selectedValue = e.target.value
    setSort(selectedValue)
  }

  return (
    <TopContainer>
      <TopNavigationBar title={"미션 히스토리"}/>
      <MenuContainer>
        <h2>미션</h2>
      </MenuContainer>
      <MissionListWrapper>
      <MenuContainer>
      <MissionHeaderContainer>완료한 미션</MissionHeaderContainer>
      <Dropdown onChange={handleDropdownChange}>
        <option value="newest">최신순</option>
        <option value="oldest">오래된순</option>
      </Dropdown>
      </MenuContainer>
      <MissionListContainer>
      {successMission.length > 0 ? (
        successMission.map((mission, index) => (
          <MissionItemContainer
            even={0}
            onClick={() => handleMissionClick(mission.id)}
            key={index}
          >
            <MissionItem
              even={0}
              missionTitle={mission.title}
              missionReward={mission.reward}
              missionDate={mission.deadline}
              parentConfirm={mission.parentConfirm}
              childConfirm={mission.childConfirm}
            />
          </MissionItemContainer>
          ))
          ) : (
            <MessageContainer>현재 완료된 미션이 없습니다</MessageContainer>
          )}
      </MissionListContainer>
      </MissionListWrapper>
    </TopContainer>
  )
}