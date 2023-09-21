import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
  magin-left: 0px;
  text-align: left;
  line-height: 40px;
  font-size: 22px;

  font-family: kbFontBold;
`

export const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const HistoryMissionButton = styled.button`
    margin-top: 20px;
    width: 67px;
    height: 22px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: #8D744A;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &:hover {
        background-color: #A88A5A;
    }
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
  height: 115px;
  margin-bottom: 10px;
  background-color: ${props => props.even ? '#FFFFFF' : '#F6F7F8'};
  opacity: 1;
  display:flex;
  border-radius:8px;
  border-radius: 8px;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
`;

export const MessageContainer = styled.div`
  height: 76.66px;
  background: #E5E5E5;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8E8E8E;
`;

export const MissionListWrapper = styled.div`
  overflow-y: auto;
  height: 620px;
`;
