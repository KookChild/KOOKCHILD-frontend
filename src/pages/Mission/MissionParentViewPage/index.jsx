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
  RadioButtonGroup,
  RadioLabel,
} from './style'
import imgSrc from './img/Bear.png'
import imgSrc2 from './img/ALL.jpeg'
import imgSrc3 from './img/prefer.png'
import { getParentMissionByChild } from '@apis'
import { TopContainer } from '@components'
import { selectedChild } from '../../../recoil'
import { TopNavigationBar } from '../../../components/TopNavigationBar'
import { useSetRecoilState } from 'recoil'
export const MissionParentViewPage = () => {
  const setSelectedChildId = useSetRecoilState(selectedChild)
  const [missions, setMissions] = useState([])
  const [childs, setChilds] = useState([])
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const navigate = useNavigate()
  const [selectedChildIndex, setSelectedChildIndex] = useState(0)
  const [missionFilter, setMissionFilter] = useState('ongoing')
  const parent = localStorage.getItem('parent')

  const handleMissionClick = missionId => {
    navigate(`/mission/detail/${missionId}`)
  }

  const handleChildClick = childId => {
    setSelectedChildIndex(childId)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getParentMissionByChild(
          selectedChildIndex,
          missionFilter,
        )
        setMissions(response.missionLists)
        setChilds(response.childLists)
      } catch (error) {
        console.error('Error fetching the data:', error)
      }
    }

    fetchData()
  }, [selectedChildIndex, missionFilter])

  return (
    <TopContainer>
      <TopNavigationBar title={'미션, 챌린지 관리'} />
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
      </div>
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
            isEven={index % 2 === 1}
            onClick={() => handleMissionClick(mission.id)}
            key={index}
          >
            <MissionItem
              isEven={index % 2 === 1}
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
    </TopContainer>
  )
}
