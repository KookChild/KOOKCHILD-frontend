import { styled } from 'styled-components'
import { PRIMARY, GRAY } from '@utility/COLORS'
export const headerContainer = {
  backgroundColor: '#F6F6FF',
  width: '360px',
  height: '1600px',
  margin: 'auto',
  padding: '16px',
  boxSizing: 'border-box',

}

export const iconContainer = {
  display: 'flex',
  justifyContent: 'space-between', // 오른쪽 정렬
  marginTop: '20px', // 아이콘 위의 간격
  marginRight: '16px', // 아이콘 오른쪽 간격
  marginBottom: '12px',
  gap: '16px', // 아이콘 사이의 간격
}

export const UserNameContatiner = {
  display: 'flex',
  justifyContent: 'space-between', // 오른쪽 정렬
  marginTop: '20px', // 아이콘 위의 간격
  marginLeft: '8px', // 아이콘 오른쪽 간격
  marginBottom: '12px',
  gap: '16px', // 아이콘 사이의 간격
}

export const textContainer = {
  fontFamily: 'kbFontBold',
  padding: '23px 15px 5px 15px',
  display: 'flex',
  justifyContent: 'space-between', // 오른쪽 정렬을 위한 스타일
}
export const childNameContainer = {
  color: `${PRIMARY}`,
  marginRight: '10px',
}

export const TextContainerSpan = styled.span`
  margin-top: 7px;
  margin-right: 12px;
  font-size: 8px;
  cursor: pointer;

  &:hover {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
`;

// 우측 상단 아이콘
export const iconGroup = {
  marginTop: '10px', // 아이콘 위의 간격
  display: 'flex',
  gap: '16px', // 아이콘 사이의 간격
}

// 버튼 공통
export const ButtonSection = styled.div`
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2px',
  marginBottom: '5px',
  transition: background-color 0.3s, /* 추가: 배경색 변경 애니메이션 */

  &:hover {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2)
  }
  
`


export const HistoryMissionButton = styled.button`
    width: 67px;
    height: 22px;
    color: white;
    border: none;
    cursor: pointer;
    font-size:12px;
    background-color: #8D744A;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &:hover {
        background-color: #A88A5A; /* 호버 시 밝은 배경색으로 변경 */
    }
`;


export const TopTextContainer = {
  fontFamily: 'sdEB',
  fontSize: '20px',
  padding: '15px ',
}
export const accountNumberContainer = {
  fontFamily: 'sdSb',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '13px',
  marginBottom: '10px',
}
export const balanceContainer = {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
  fontFamily: 'sdSB',
}
export const buttonsContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  color: 'white',
}
export const MyAccountButton = {
  position: 'relative',
  backgroundColor: '#ffffff',
  flex: 1,
  padding: '30px 20px', 
  margin: '8px',
  borderRadius: '8px', 
  border: '1px solid #ccc', 
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
}


export const CustomLinkButton = {
  backgroundColor: '#FFCC00 ',
  padding: '10px 20px',
  borderRadius: '8px',
  textAlign: 'center',
  fontSize: '14px',
  textDecoration: 'none',
  display: 'inline-block',
  boxShadow: '0px 2px 4px #00000029',
  width: '65px',
}

export const DailyQuizButton = {
  backgroundColor: '#ffffff',
  flex: 1,
  padding: '30px 20px',
  margin: '8px',
  borderRadius: '8px', 
  border: '1px solid #ccc',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  width:'95%'
}

export const ChallengeContainer = {
  display: 'flex',
  margin: '10px',
  flexDirection: 'column', 
  marginBottom: '20px', 
  alignItems: 'center', 
  border: '1px solid #ccc',
  borderRadius: '12px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '6px',
  width: '300px',
}

export const ChallengeImage = {
  position: 'relative',
}

export const ChallengeProgress = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  backgroundColor: 'rgba(128, 128, 128, 0.7)',
  color: 'white',
  padding: '5px',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
}

export const ChallengeInfo = {
  display: 'flex',
  justifyContent: 'space-between',
}

////////////////////////////////////////////////

export const BackToKBStarBankingButton = {
  backgroundColor: '#ffffff',
  flex: 0.4,
  padding: '10px 10px', 
  marginTop: '22px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  whiteSpace: 'normal',
  width: '200px',
}
