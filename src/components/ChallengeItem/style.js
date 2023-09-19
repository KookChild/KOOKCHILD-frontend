import { styled } from 'styled-components'
import { PRIMARY } from '@utility/COLORS'
export const ChallengeContainer = {
  display: 'flex',
  flexDirection: 'column', // 컨테이너 방향을 세로로 변경
  marginBottom: '20px', // 각 챌린지 아이템 아래에 마진 추가
  alignItems: 'center', // 아이템을 세로 중앙에 배치
  border: '1px solid #ccc',
  borderRadius: '12px', // 둥근 모서리
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자
  padding: '6px', // 내부 여백
  //   width: '300px', // 너비
  margin: '8px',
  cursor: 'pointer',
  position: 'relative',
  width: '310px',
}

export const ChallengeImageProgressContainer = styled.div`
  width: 100%;
`

export const ChallengeProgress = {
  position: 'absolute',
  bottom: '50px',
  left: '10px',
  backgroundColor: 'rgba(128, 128, 128, 0.7)',
  color: 'white',
  padding: '5px',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
}

export const ChallengeInfo = styled.div`
  font-family: kbFont;
  font-size: 16px;
`

export const moneyIcon = {
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  boxShadow: 'inset 0px 1px 3px #00000029',
  borderRadius: '15px',
  color: 'white',
  opacity: '1',
  color: PRIMARY,
}
