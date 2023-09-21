import { GRAY, DARK_GRAY } from '@utility/COLORS'
import styled from 'styled-components';
export const missionListContainer = {
  backgroundColor: '#ffffff',
  flex: 1,
  padding: '30px 20px', // 세로 길이를 조절
  margin: '8px',
  borderRadius: '8px', // 모서리 라운딩
  border: '1px solid #ccc', // 테두리 없앰
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
  '&:hover': {
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
  },
  
}

export const NoMissionsMessage = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 20px;
  background-color: #f5f5f5; /* 회색 배경색 */
  opacity: 0.8; /* 글자의 투명도 조절 (0.8은 80% 투명) */
`;

export const MissionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  // &:hover {
  //   background-color: #FFD966;
  // }
`;


export const missionInfo = {
  flex: 1,
}

export const missionTitle = {
  fontSize: '16px',
  fontWeight: 'bold',
}

export const missionDetail = {
  fontSize: '14px',
}

export const rewardContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40px',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
  padding: '0 7px'
}

export const rewardText = {
  fontSize: '14px',
  textAlign: 'center', // 가운데 정렬
}

export const checkClass = {
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  color: GRAY,
  marginLeft: '10px',
  marginRight: '10px',
  border: `1px solid ${DARK_GRAY}`,
}
