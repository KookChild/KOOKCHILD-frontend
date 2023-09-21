import React, { useState, useEffect } from 'react'

import {
  loadChildAccountDetailAPI,
  getMissions,
  loadMyChallengesAPI,
  getProceedingMissionByChild,
  getDailyQuiz,
loadParentNameAPI,
} from '@apis'

import { useNavigate } from 'react-router-dom'
import {
  buttonSection,
  MyAccountButton,
  CustomLinkButton,
  DailyQuizButton,
  textContainer,
  BackToKBStarBankingButton,
  TextContainerSpan,
  accountNumberContainer,
  buttonsContainer,
  balanceContainer,
  childNameContainer,
  TopTextContainer,
  ButtonSection,
  HistoryMissionButton,
} from './style'

import {
  TopContainer,
  StyledCurrentMissionList,
  ChallengeItem,
  QuizTab,
} from '@components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
import { GRAY, PRIMARY } from '@utility/COLORS'

library.add(faBell, faGear, faPlus)

export const ChildMainPage = () => {
  const [child, setChildData] = useState({
    accountName: '',
    accountNum: '',
    balance: '',
  })
  const [missionList, setMissionList] = useState([])
  const [challengeList, setChallengeList] = useState([])
  const navigate = useNavigate()
  const handleCopyClick = () => {
    navigator.clipboard.writeText('553702-01-000000')
  }

  const [animatedDigits, setAnimatedDigits] = useState([])
  const [dailyQuiz, setDailyQuiz] = useState(null);

  const navigateToHistory = () => {
    navigate('/quiz/historyview');
  }

  // TODO : mission proceeding api로 변경하기

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userNameResponse = await loadParentNameAPI();
        const childDataResponse = await loadChildAccountDetailAPI()
        let formattedBalance
        const missionDataResponse = await getMissions('newest')
        const challengeDateResponse = await loadMyChallengesAPI()
        console.log(missionDataResponse)
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
          accountName: userNameResponse.name,
          accountNum: childDataResponse.accountNum,
          balance: formattedBalance, // 처리된 문자열로 저장
        })
        setMissionList(missionDataResponse.ongoingMissionLists)
        setChallengeList(challengeDateResponse)

        // 일일 퀴즈 데이터 요청
        const dailyQuizData = await getDailyQuiz();
        setDailyQuiz(dailyQuizData);
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
      <div style={TopTextContainer}>
        <span style={childNameContainer}>{child.accountName}</span>
        <span>님의 자산</span>
      </div>

      <div>
        <div style={MyAccountButton}>
          <div
            onClick={handleCopyClick}
            style={{ ...accountNumberContainer, color: PRIMARY }}
          >
            {child.accountNum}
          </div>

          <div style={balanceContainer}>{animatedDigits.join('')}원</div>
          <br />
          <div style={buttonsContainer}>
            <div
              style={{ ...CustomLinkButton, backgroundColor: GRAY }}
              onClick={() => navigate('/transaction-history')}
            >
              입출금 내역
            </div>
            <div
              style={{
                ...CustomLinkButton,
                backgroundColor: PRIMARY,
                color: 'black',
              }}
              onClick={() => navigate('/transfer')}
            >
              이체하기
            </div>
          </div>
        </div>
      </div>
      <div style={textContainer}>
        <span>일일 퀴즈</span>
        <HistoryMissionButton onClick={() => navigate('/quiz/historyview')}>
            히스토리
        </HistoryMissionButton>
      </div>
      <ButtonSection>
        {dailyQuiz ? <QuizTab data={dailyQuiz} /> : <button style={DailyQuizButton}> -일일 퀴즈 img- </button>}
      </ButtonSection>

      <div style={textContainer}>
        <span>진행중인 미션</span>
      </div>
      <ButtonSection>
        <StyledCurrentMissionList missions={missionList} />
      </ButtonSection>

      <div style={textContainer}>
        <span>진행중인 챌린지</span>
      </div>

      <ButtonSection>
        {challengeList.map(challenge => (
          <ChallengeItem key={challenge.id} challenge={challenge} />
        ))}
      </ButtonSection>
    </TopContainer>
  )
}
