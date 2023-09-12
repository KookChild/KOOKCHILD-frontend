import styled from 'styled-components';

// 화면을 중앙 정렬하는 스타일 컴포넌트
export const CenteredContainer = styled.div`
  height: 844px;
  width: 390px;
  position: absolute;
  top: 50%; /* 세로 중앙 정렬 */
  left: 50%; /* 가로 중앙 정렬 */
  transform: translate(-50%, -50%); /* 가로, 세로 중앙 정렬을 위한 변환 */
  background-color: #f0f0f0; /* 배경색을 원하는 색상으로 변경 */
  border: 1px solid #ccc; /* 테두리 스타일을 원하는 스타일로 변경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  padding: 20px; /* 내부 여백 설정 */

  display: flex;
  flex-direction: column; /* 자식 컴포넌트를 세로로 배치 */
`

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
max-width: 100%;  // 추가
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
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
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
    gap: 10px; // 탭 사이의 간격을 주기 위함
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
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AddMissionButton = styled.button`
    margin-top: 30px;
    width: 378px;
    height: 60px;
    background: #FFCC00;
    border-radius: 6px;
    border: none;
    color: black; // 텍스트 색상 설정 (버튼 내의 텍스트가 흰색으로 보이게 합니다)
    font-size: 18px; // 적절한 글꼴 크기를 설정
    cursor: pointer; // 버튼을 가리킬 때 손 모양으로 변경
    outline: none;   // 기본 외곽선 제거
    transition: 0.3s; // 부드러운 호버 효과를 위한 전환

    &:hover {
        background: #E5B900; // 호버 시의 배경색 변경
    }
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
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