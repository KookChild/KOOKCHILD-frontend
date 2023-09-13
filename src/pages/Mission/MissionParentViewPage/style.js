import styled from 'styled-components';

export const Header = styled.div`
  padding: 10px;
  text-align: center;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const HeaderImage = styled.img`
  width: 20px; /* 이미지 너비 조정 */
  height: 20px; /* 이미지 높이 조정 */
  margin-right: 30px; /* 이미지와 title 간의 간격 설정 */
`

export const HeaderTitle = styled.h1`
  font-size: 18px; /* title의 글꼴 크기 조정 */
  font-weight: bold; /* title 텍스트 굵게 설정 */
  margin: 0; /* title의 margin 제거 */
`

export const ChildListContainer = styled.div`
  margin-top: 30px;
  max-width: 100%;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
      display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ChildItemContainer = styled.div`
  min-width: 86px;
  height: 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  img {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      width: 86px;
      height: 86px;
  }

  p {
      margin-top: 10px;
  }
  border-bottom: ${props => props.isSelected ? '2px solid #FFCC00' : 'none'};
  p {
      color: ${props => props.isSelected ? '#FFCC00' : '기본 색상'};
  }
`;

export const TabContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

export const Tab = styled.button`
  width: 78px;
  height: 30px;
  background: ${props => props.isSelected ? '#84888B' : '#FFFFFF'};
  box-shadow: inset 0px 1px 3px #00000029;
  border: 1px solid #84888B;
  border-radius: 15px;
  opacity: 1;
  color: ${props => props.isSelected ? 'white' : '#84888B'};
  cursor: pointer;
  outline: none;
  top: ${props => props.isSelected ? 'auto' : '278px'};
  left: ${props => props.isSelected ? 'auto' : '112px'};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AddMissionButton = styled.button`
  margin-top: 30px;
  width: 378px;
  height: 45px;
  background: #FFCC00;
  border-radius: 6px;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover {
      background: #E5B900;
  }
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const MissionListContainer = styled.div`
  overflow-y: auto;
  max-height: 444px;
  margin-top: 10px;

  // Chrome, Safari
  &::-webkit-scrollbar {
      display: none;
  }

  // Firefox
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MissionItemContainer = styled.div`
  width: 390px;
  height: 80px;
  background-color: ${props => props.isEven ? '#FFFFFF' : '#F6F7F8'};
  opacity: 1;
  display:flex;
`;