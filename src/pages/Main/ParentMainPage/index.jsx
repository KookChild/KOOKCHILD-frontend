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
  flexContainer,
  managePicture,
  buttonTextContainer2,
  managePicture2,
  BankName,
  SendContainer,
  Send,
} from './style'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faGear, faPlus } from '@fortawesome/free-solid-svg-icons'
library.add(faBell, faGear, faPlus)

// 더미 초기값.
export const ParentMainPage = () => {
  const navigate = useNavigate()
  const [isAccountLinked, setAccountLinked] = useState(false)
  const [animatedDigits, setAnimatedDigits] = useState([])
  const [parentData, setParentData] = useState({});
  const [name, setName] = useState('')

  const handleNavigation = path => {
    navigate(path)
  }
  function formatCurrency(value) {
    return new Intl.NumberFormat('ko-KR').format(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parentData = await loadParentNameAPI()
        if (parentData && parentData.name) {
          setName(parentData.name)
          setParentData(parentData)
        }
      } catch (error) {
        console.error('Error fetching challenge detail:', error)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    if (isAccountLinked && parentData.accountBalance) {
      let digitsArray = String(parentData.accountBalance).split('');
      let animatedDigitsTemp = Array(digitsArray.length).fill('0');
      digitsArray.forEach((digit, index) => {
        let animation = setInterval(() => {
          const randomDigit = Math.floor(Math.random() * 10);
          animatedDigitsTemp[index] = randomDigit.toString();
          setAnimatedDigits(formatCurrency(animatedDigitsTemp.join('')));
        }, 25);
        setTimeout(() => {
          clearInterval(animation);
          animatedDigitsTemp[index] = digit;
          setAnimatedDigits(formatCurrency(animatedDigitsTemp.join('')));
        }, 300 + index * 100);
      });
    }
  }, [isAccountLinked, parentData.accountBalance]);


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
        <BankName>입출금 통장</BankName>
        <span style={AccounttextLine2}>{parentData.accountNum}</span>
        <SendContainer>
          <span style={AccounttextLine1}>{`${animatedDigits}원`}</span>
          <Send>이체하기</Send>
        </SendContainer>
      </div>
    </button>
  )
  const handleExternalLink = () => {
    window.location.href = 'https://www.kbstar.com/' // 외부 링크로 이동
  }

  return (
    <TopContainer>
      <div style={iconContainer}>
        <div style={TopTextContainer}>
          <span style={{ color: '#FFCC00', fontFamily: 'kbFontBold' }}>KB</span>
          <span>키즈 뱅크</span>
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
          <div style={flexContainer}>
            <div style={buttonTextContainer}>
              <span style={textLine1}>자녀 금융 관리</span>
              <span style={textLine2}>자녀의 금융 활동 현황을 확인해요</span>
            </div>
          </div>
            {/* 이미지 컨테이너 */}
          <div className="image-container">
            <img src={require('../../../img/자녀금융관리.png')} alt="자녀금융관리" style={managePicture2} />
          </div>
        </button>
      </div>

      <div style={buttonSection}>
        <button
          style={ViewFinanceProductButton}
          onClick={() => handleNavigation('/financeproduct')}
        >
          <div className="image-container">
            <img src={require('../../../img/금융상품.png')} alt="금융상품" style={managePicture} />
          </div>
          <div style={buttonTextContainer2}>
            <span style={textLine1}>자녀-부모<br/>연계 금융 상품</span>
            <span style={textLine2}>자녀에게 이자를</span>
            <span style={textLine2}>지급해보세요!</span>
          </div>
        </button>
        <button
          style={RewardManagementButton}
          onClick={() => handleNavigation('/mission/parentview')}
        >
           <div className="image-container">
            <img src={require('../../../img/미션챌린지.png')} alt="미션챌린지" style={managePicture} />
          </div>
          <div style={buttonTextContainer}>
            <span style={textLine1}>미션과<br/>챌린지 관리</span>
            <span style={textLine2}>자녀의 금융 미션 현황,</span>
            <span style={textLine2}>보상금을 관리해요</span>
          </div>
        </button>
      </div>
    </TopContainer>
  )
}
