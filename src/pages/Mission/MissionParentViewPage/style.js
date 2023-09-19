import styled from 'styled-components'
import { YELLOW } from '@utility/COLORS'

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
  padding: 5px;
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
`

export const ChildItemContainer = styled.div`
  min-width: 86px;
  height: 136px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: ${props => (props.selected ? '15px' : '10px')};

  img {
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: ${props => (props.selected ? '93px' : '86px')};
    height: ${props => (props.selected ? '93px' : '86px')};
    border-radius: 30px;
    border: 1px solid lightgray;
    background-color: ${props => (props.selected ? '#FEF2D3' : 'white')};
  }

  p {
    margin-top: 10px;
  }
  border-bottom: ${props => (props.selected ? '2px solid #FFCC00' : 'none')};
  p {
    color: ${props => (props.selected ? '#FFCC00' : '기본 색상')};
  }
`

export const TabContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`

export const Tab = styled.button`
  width: 78px;
  height: 30px;
  background: ${props => (props.selected ? '#84888B' : '#FFFFFF')};
  box-shadow: inset 0px 1px 3px #00000029;
  border: 1px solid #84888b;
  border-radius: 15px;
  opacity: 1;
  color: ${props => (props.selected ? 'white' : '#84888B')};
  cursor: pointer;
  outline: none;
  top: ${props => (props.selected ? 'auto' : '278px')};
  left: ${props => (props.selected ? 'auto' : '112px')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export const RadioButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 5px;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  input[type='radio'] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 2px solid #888888;
    border-radius: 50%;
    transition: all 0.3s;

    &:checked {
      border: 2px solid ${YELLOW};
      background-color: ${YELLOW};
      &:after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        margin: 3px;
      }
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const AddMissionButton = styled.button`
  margin-top: 5px;
  width: 378px;
  height: 45px;
  background: #ffcc00;
  border-radius: 6px;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover {
    background: #e5b900;
  }
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export const MissionListContainer = styled.div`
  overflow-y: auto;
  max-height: 444px;
  margin-top: 10px;
  margin-left: -20px;
  margin-right: -20px;

  // Chrome, Safari
  &::-webkit-scrollbar {
    display: none;
  }

  // Firefox
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const MissionItemContainer = styled.div`
  width: 390px;
  height: 80px;
  background-color: ${props => (props.even ? '#FFFFFF' : '#F6F7F8')};
  opacity: 1;
  display: flex;
`
