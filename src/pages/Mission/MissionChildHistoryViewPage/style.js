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
export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HistoryMissionButton = styled.button`
    width: 67px;
    height: 22px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: #8D744A;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Dropdown = styled.select`
    width: 90px;
    height: 30px;
    font-size: 16px;
    margin-top: 30px;
    margin-right: 10px;
    margin-bottom: 10px;

    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f8f8f8;
    padding: 5px 10px;
`;


export const MissionListContainer = styled.div`
  overflow-y: auto;
  margin-top: 10px;

  &::-webkit-scrollbar {
      display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MissionHeaderContainer = styled.h3`
  margin-top: 20px;

`

export const MissionItemContainer = styled.div`
  width: 390px;
  height: 115px;
  margin-bottom: 10px;
  background-color: ${props => props.even ? '#FFFFFF' : '#F6F7F8'};
  opacity: 1;
  display:flex;
`;

export const MessageContainer = styled.div`
  width: 340px;
  height: 76.66px;
  background: #E5E5E5;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8E8E8E;
`;
