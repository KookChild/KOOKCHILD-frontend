import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { loadParentNameAPI } from '@apis'
import { TopContainer } from '@components'
import {
  iconContainer,
  buttonSection,
  UserNameContatiner,
  UnlinkedAccountButtonStyle,
  LinkedAccountButtonStyle,
  ChildFinanceManagementButton,
  ViewFinanceProductButton,
  RewardManagementButton,
  TopTextContainer,
  iconGroup,
  BackToKBStarBankingButton,
  buttonTextContainer,
  textLine1,
  textLine2,
  AccounttextLine1,
  AccounttextLine2,
} from './style'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faBell, faGear, faPlus)

// 더미 초기값.
export const ParentMainPage = () => {
  const navigate = useNavigate()
  const [isAccountLinked, setAccountLinked] = useState(false)
  const finalBalance = ''
  const [animatedDigits, setAnimatedDigits] = useState([])
  const [name, setName] = useState('')

  const handleNavigation = path => {
    navigate(path)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parentData = await loadParentNameAPI()
        if (parentData && parentData.name) {
          setName(parentData.name)
        }
      } catch (error) {
        console.error('Error fetching challenge detail:', error)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    if (isAccountLinked) {
      let digitsArray = finalBalance.split('')
      let animatedDigitsTemp = []

      digitsArray.forEach((digit, index) => {
        let animation = setInterval(() => {
          const randomDigit = Math.floor(Math.random() * 10)
          animatedDigitsTemp[index] = randomDigit.toString()
          setAnimatedDigits([...animatedDigitsTemp])
        }, 25) // 숫자 변환 속도를 더 빠르게 설정

        setTimeout(() => {
          clearInterval(animation)
          animatedDigitsTemp[index] = digit
          setAnimatedDigits([...animatedDigitsTemp])
        }, 300 + index * 100) // 각 자리 숫자가 정지하는 시간을 조금 빠르게 설정
      })
    }
  }, [isAccountLinked])

  const UnlinkedAccountButton = (
    <button
      onClick={() => setAccountLinked(true)}
      style={UnlinkedAccountButtonStyle}
    >
      <div style={buttonTextContainer}>
        <span style={textLine1}>연계 계좌 등록</span>
        <span style={textLine2}>자녀에게 자동이체할 계좌를 등록하세요</span>
      </div>
      <FontAwesomeIcon icon={['fas', 'plus']} style={{ marginLeft: '50px' }} />
    </button>
  )

  const LinkedAccountButton = (
    <button style={LinkedAccountButtonStyle}>
      <div style={buttonTextContainer}>
        <span style={AccounttextLine2}>553702-01-444555</span>
        <span style={AccounttextLine1}>{`${animatedDigits.join('')} 3,612,000 원`}</span>
      </div>
    </button>
  )

  return (
    <TopContainer>
      <div style={iconContainer}>
        <div style={TopTextContainer}>
          <span style={{ color: '#FFCC00' }}>KB</span>
          <span> 자녀 금융 EDU</span>
        </div>
        <div style={iconGroup}>
          <FontAwesomeIcon icon={['fas', 'bell']} size="lg" />
          <FontAwesomeIcon icon={['fas', 'gear']} size="lg" />
        </div>
      </div>

      <div style={UserNameContatiner}>
        <span>{`${name}님`}</span>
      </div>

      <div style={buttonSection}>
        {isAccountLinked ? LinkedAccountButton : UnlinkedAccountButton}
      </div>
      <div style={buttonSection}>
        <button
          style={ChildFinanceManagementButton}
          onClick={() => handleNavigation('/management')}
        >
          <div style={buttonTextContainer}>
            <span style={textLine1}>자녀 금융 관리</span>
            <span style={textLine2}>자녀의 금융 활동 현황을 확인해요</span>
          </div>
        </button>
      </div>

      <div style={buttonSection}>
        <button
          style={ViewFinanceProductButton}
          onClick={() => handleNavigation('/financeproduct')}
        >
          <div style={buttonTextContainer}>
            <span style={textLine1}>자녀-부모 연계 상품</span>
            <span style={textLine2}>부모님이 자녀에게 이자를</span>
            <span style={textLine2}>지급해보세요!</span>
          </div>
        </button>
        <button
          style={RewardManagementButton}
          onClick={() => handleNavigation('/mission/parentview')}
        >
          <div style={buttonTextContainer}>
            <span style={textLine1}>미션, 챌린지 관리</span>
            <span style={textLine2}>자녀의 금융 미션 현황,</span>
            <span style={textLine2}>보상금을 관리해요</span>
          </div>
        </button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={BackToKBStarBankingButton}>
          <span style={{ fontSize: '12px' }}>KB스타뱅킹으로 돌아가기</span>
        </button>
      </div>
    </TopContainer>
  )
}
