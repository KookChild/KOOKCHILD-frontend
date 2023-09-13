import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getMissions, loadChildAccountDetailAPI } from '@apis'
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
import { TopContainer } from '@components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
// ChallengeItem.jsx
import { ChallengeItem } from '@components'
// 샘플 이미지 테스트
import sampleChallenge from './img/Sample_challenge.jpg'
import { useNavigate } from 'react-router-dom'
library.add(faBell, faGear, faPlus)

export const ChildMainPage = () => {
  const [child, setChildData] = useState({
    accountName: '',
    accountNum: '',
    balance: '',
  })
  const [missionList, setMissionList] = useState([])
  const navigate = useNavigate()
  const handleCopyClick = () => {
    navigator.clipboard.writeText('553702-01-000000')
  }

  const [animatedDigits, setAnimatedDigits] = useState([])

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
        let formattedBalance
        const missionDataResponse = await getMissions('newest')
        // childDataResponse.balance의 타입에 따라 적절하게 처리
        if (typeof childDataResponse.balance === 'number') {
          formattedBalance = childDataResponse.balance.toLocaleString()
        } else if (typeof childDataResponse.balance === 'string') {
          formattedBalance = childDataResponse.balance
        } else {
          console.error(
            'Balance is neither a number nor a string:',
            childDataResponse.balance,
          )
          formattedBalance = 'N/A' // Not Available로 표시
        }

        setChildData({
          accountName: childDataResponse.accountName,
          accountNum: childDataResponse.accountNum,
          balance: formattedBalance, // 처리된 문자열로 저장
        })
        setMissionList(missionDataResponse.missionLists)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (child.balance === null) return
    let balanceStr = String(child.balance) // 문자열로 변환
    let digitsArray = balanceStr.split('') // 이제 child.balance는 문자열이므로 split이 가능

    // animatedDigitsTemp 배열의 초기 길이를 확인하고,
    // 필요한 경우 animatedDigits 배열의 길이를 조정합니다.
    if (animatedDigits.length !== balanceStr.length) {
      let lengthDifference = balanceStr.length - animatedDigits.length

      // 자릿수가 늘었다면 앞에 '0'을 추가합니다.
      if (lengthDifference > 0) {
        let newZeros = Array.from({ length: lengthDifference }, () => '0')
        setAnimatedDigits([...newZeros, ...animatedDigits])
      }
      // 자릿수가 줄었다면 앞의 '0'을 제거합니다.
      else if (lengthDifference < 0) {
        setAnimatedDigits(animatedDigits.slice(-lengthDifference))
      }
    }

    let animatedDigitsTemp = [...animatedDigits] // 현재의 animatedDigits를 복사

    digitsArray.forEach((digit, index) => {
      let animation = setInterval(() => {
        const randomDigit = Math.floor(Math.random() * 10)
        animatedDigitsTemp[index] = randomDigit.toString()

        // 전체 배열을 사용하여 상태를 업데이트
        setAnimatedDigits([...animatedDigitsTemp])
      }, 25)

      setTimeout(() => {
        clearInterval(animation)
        animatedDigitsTemp[index] = digit

        // 전체 배열을 사용하여 상태를 업데이트
        setAnimatedDigits([...animatedDigitsTemp])
      }, 100 + index * 150)
    })
  }, [child.balance]) // child.balance가 변경될 때마다 이 효과를 적용

  return (
    <TopContainer>
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
            {animatedDigits.join('')}
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
    </TopContainer>
  )
}
