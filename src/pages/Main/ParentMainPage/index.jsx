import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerContainer, iconContainer, UserNameContatiner, buttonSection, LinkAccountButton, ChildFinanceManagementButton, ViewFinanceProductButton, RewardManagementButton, textContainer, iconGroup, BackToKBStarBankingButton } from './style';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faBell, faGear, faPlus);

export const ParentMainPage = () => {

  return (
    <div style={headerContainer}>
      <div style={iconContainer}>
        <div style={textContainer}>
          <span>Kook Child</span>
        </div>
        <div style={iconGroup}>
          <FontAwesomeIcon icon={['fas', 'bell']} size='lg' />
          <FontAwesomeIcon icon={['fas', 'gear']} size='lg' />
        </div>
      </div>

      <div style={UserNameContatiner}>
        <span>김아빠 님</span>
      </div>

      <div style={buttonSection}>
        <button style={LinkAccountButton}>
        <FontAwesomeIcon icon={['fas', 'plus']}/><br/><br/>
          연계 계좌 등록</button>
      </div>

      <div style={buttonSection}>
        <button style={ChildFinanceManagementButton}>자녀 금융 관리</button>
      </div>

      <div style={buttonSection}>
        <button style={ViewFinanceProductButton}>자녀-부모 금융상품 확인하기</button>
        <button style={RewardManagementButton}>미션 및 챌린지 보상 관리</button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={BackToKBStarBankingButton}>
          <span style={{ fontSize: '8px' }}>KB스타뱅킹으로 돌아가기</span>
        </button>
      </div>
    </div>
  )
}