import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MissionItem } from '@components'
import {
  CenteredContainer,
  Header,
  HeaderContent,
  HeaderImage,
  HeaderTitle,
  Dropdown,
  MissionItemContainer,
  MissionListContainer
} from './style'
import { getMissions } from '@apis'
import prefer from './img/prefer.png'

export const MissionChildViewPage = () => {
  const [missions, setMissions] = useState([])
  const [sort, setSort] = useState('newest')
  const navigate = useNavigate() // <-- 여기에 추가

  const handleMissionClick = missionId => {
    navigate(`/mission/detail/${missionId}`) // <-- 여기를 수정
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await getMissions(sort)
      console.log(data.missionLists)
      setMissions(data.missionLists)
    }
    fetchData()
  }, [sort])

  const handleDropdownChange = e => {
    const selectedValue = e.target.value
    setSort(selectedValue)
  }

  return (
    <div>
      <CenteredContainer>
            <Header>
                <HeaderContent onBackClick={() => navigate('/path-to-go-back')}>
                    <HeaderImage src={prefer} />
                    <HeaderTitle>미션상세페이지</HeaderTitle>
                </HeaderContent>
            </Header>
        <Dropdown onChange={handleDropdownChange}>
          <option value="newest">최신순</option>
          <option value="oldest">오래된순</option>
        </Dropdown>
        <MissionListContainer>
          {missions.map((mission, index) => (
            <MissionItemContainer isEven={index % 2 === 0} onClick={() => handleMissionClick(mission.id)} key={index}>
              <MissionItem
                isEven={index % 2 === 0}
                missionTitle={mission.title}
                missionReward={`${mission.reward}원`}
                missionDate={mission.deadline !== 'null-null' ? mission.deadline : '기한 없음'}
                parentConfirm={mission.parentConfirm}
                childConfirm={mission.childConfirm}
              />
            </MissionItemContainer>
          ))}
        </MissionListContainer>
      </CenteredContainer>
    </div>
  )
}
