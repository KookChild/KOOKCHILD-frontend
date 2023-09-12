import styled from 'styled-components';

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
  cursor: pointer;
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

export const Dropdown = styled.select`
    width: 100px;
    height: 40px;
    font-size: 16px;
    margin-top: 30px;
    margin-left: 10px;
    margin-bottom: 10px;

    border: none;  // 테두리 제거
    border-radius: 8px;  // 둥근 모서리
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  // 그림자 효과
    background-color: #f8f8f8;  // 배경색
    padding: 5px 10px;  // 내부 패딩 추가
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