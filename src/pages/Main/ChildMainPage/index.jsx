import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loadAllMissionAPI, loadChildAccountDetailAPI } from '@apis'
import { useEffect, useState } from 'react'
import {
  headerContainer,
  iconContainer,
  buttonSection,
  MyAccountButton,
  CustomLinkButton,
  DailyQuizButton,
  StyledCurrentMissionList,
  textContainer,
  iconGroup,
  BackToKBStarBankingButton,
  textContainerSpan,
} from './style'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
// ChallengeItem.jsx
import { ChallengeItem } from './ChallengeItem'
// 샘플 이미지 테스트
import sampleChallenge from './img/Sample_challenge.jpg'
//
library.add(faBell, faGear, faPlus)

export const ChildMainPage = () => {
  const [child, setChildData] = useState({
    accountName: '김국민',
    accountNum: 0,
    balance: 0,
  })
  const [missionList, setMissionList] = useState([])
  const handleCopyClick = () => {
    navigator.clipboard.writeText('553702-01-000000')
  }

  const missionsArray = [
    { title: '미션명1', detail: '미션 상세내용1', reward: 2000 },
    { title: '미션명2', detail: '미션 상세내용2', reward: 3000 },
    { title: '미션명3', detail: '미션 상세내용2', reward: 4000 },
  ]

  const challengesArray = [
    { id: 1, title: '26주 적금 도전', imageURL: sampleChallenge, progress: 50 },
    {
      id: 2,
      title: '다이어트 챌린지',
      imageURL: sampleChallenge,
      progress: 20,
    },
    // ...
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const childDataResponse = await loadChildAccountDetailAPI()
        const missionListResponse = await loadAllMissionAPI()
        const formattedBalance = childDataResponse.balance.toLocaleString()
        setChildData({
          accountName: childDataResponse.accountName,
          accountNum: childDataResponse.accountNum,
          balance: formattedBalance,
        })
        setMissionList(missionListResponse)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <div style={headerContainer}>
      <div style={iconContainer}>
        <div style={textContainer}>
          <span>Kook Child</span>
        </div>
        <div style={iconGroup}>
          <FontAwesomeIcon icon={['fas', 'bell']} size="lg" />
          <FontAwesomeIcon icon={['fas', 'gear']} size="lg" />
        </div>
      </div>

      <div style={textContainer}>
        <span>{child.accountName}님의 자산</span>
      </div>

      <div style={buttonSection}>
        <div style={MyAccountButton}>
          <div
            onClick={handleCopyClick}
            style={{ cursor: 'pointer', fontSize: 'small' }}
          >
            {child.accountNum}
          </div>
          <br />
          <div style={{ fontSize: '22px', cursor: 'pointer' }}>
            {child.balance}
          </div>
          <br />
          <Link to="/transaction-history" style={CustomLinkButton}>
            입출금 내역
          </Link>
          <Link to="/transfer" style={CustomLinkButton}>
            이체하기
          </Link>
        </div>
      </div>
      <div style={textContainer}>
        <span>일일 퀴즈</span>
        <span style={textContainerSpan}>더보기</span>
      </div>
      <div style={buttonSection}>
        <button style={DailyQuizButton}> -일일 퀴즈 img- </button>
      </div>
      <div style={textContainer}>
        <span>진행중인 미션</span>
        <span style={textContainerSpan}>더보기</span>
      </div>
      <div style={buttonSection}>
        <StyledCurrentMissionList missions={missionList} />
      </div>

      <div style={textContainer}>
        <span>진행중인 챌린지</span>
      </div>

      <div style={buttonSection}>
        {/* 여기에서 ChallengeItem 컴포넌트를 사용하여 챌린지 목록을 렌더링합니다. */}
        {challengesArray.map(challenge => (
          <ChallengeItem key={challenge.id} challenge={challenge} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={BackToKBStarBankingButton}>
          <span style={{ fontSize: '8px' }}>KB스타뱅킹으로 돌아가기</span>
        </button>
      </div>
    </div>
  )
}
