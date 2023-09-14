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
  fontWeight: '700',
  fontSize: '24px',
  padding: '15px 0px',
  marginLeft: '12px', // 텍스트 왼쪽에 여백 추가
  display: 'flex',
  justifyContent: 'space-between', // 오른쪽 정렬을 위한 스타일
}
export const childNameContainer = {
  color: `${PRIMARY}`,
  marginRight: '10px',
}

export const textContainerSpan = {
  marginTop: '7px', // 텍스트 위의 간격s
  marginRight: '12px',
  fontSize: '8px',
}

// 우측 상단 아이콘
export const iconGroup = {
  marginTop: '10px', // 아이콘 위의 간격
  display: 'flex',
  gap: '16px', // 아이콘 사이의 간격
}

// 버튼 공통
export const buttonSection = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2px',
  marginBottom: '5px',
}
export const accountNumberContainer = {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '13px',
}
export const balanceContainer = {
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '20px',
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
  padding: '38px 20px', // 세로 길이를 조절
  margin: '8px',
  borderRadius: '8px', // 모서리 라운딩
  border: '1px solid #ccc', // 테두리 없앰
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
}

// MyAccountButton 내부 버튼
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
  padding: '30px 20px', // 세로 길이를 조절
  margin: '8px',
  borderRadius: '8px', // 모서리 라운딩
  border: '1px solid #ccc', // 테두리 없앰
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
}

export const ChallengeContainer = {
  display: 'flex',
  margin: '10px',
  flexDirection: 'column', // 컨테이너 방향을 세로로 변경
  marginBottom: '20px', // 각 챌린지 아이템 아래에 마진 추가
  alignItems: 'center', // 아이템을 세로 중앙에 배치
  border: '1px solid #ccc',
  borderRadius: '12px', // 둥근 모서리
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자
  padding: '6px', // 내부 여백
  width: '300px', // 너비
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
  padding: '10px 10px', // 세로 길이를 조절
  marginTop: '22px',
  borderRadius: '8px', // 모서리 라운딩
  border: '1px solid #ccc',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
  whiteSpace: 'normal',
  width: '200px',
}
