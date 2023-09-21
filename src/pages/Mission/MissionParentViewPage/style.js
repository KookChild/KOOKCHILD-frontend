import styled from 'styled-components'
import { PRIMARY, YELLOW } from '@utility/COLORS'

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
  margin-right: 10px; // 선택 상태에 관계없이 마진은 일정하게 유지

  img {
    width: ${props => (props.selected ? '86px' : '86px')}; // 이미지 크기 확대
    height: ${props => (props.selected ? '86px' : '86px')}; // 이미지 크기 확대
    border-radius: 30%; // border-radius 조절
    border: 2px solid transparent;
    transition: all 0.1s ease; // 부드러운 애니메이션 효과 추가
  }

  p {
    margin-top: 10px;
    color: ${props => (props.selected ? '#FFCC00' : '기본 색상')}; // 텍스트 색상 조절
  }
  
  &:hover {
    img {
      transform: scale(1.1); // 마우스 호버 시 이미지 확대
    }
  }

  border-bottom: ${props => (props.selected ? '2px solid #FFCC00' : 'none')};
`;

export const TabContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`

export const Tab = styled.button`
  width: 78px;
  height: 30px;
  background: ${props => (props.selected ? '#FFBB5C' : '#FFFFFF')};
  box-shadow: inset 0px 1px 3px #00000029;
  border: none;
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
  background: ${PRIMARY};
  border-radius: 6px;
  border: none;
  color: black;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  transition: 0.3s;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`

export const MissionListContainer = styled.div`
  overflow-y: auto;
  max-height: 410px;
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

export const Img = styled.img`
width: 100%;
// height: 163px;
height: 100%;
object-fit: cover;
top: 0;
left: 0;
right: 0;
bottom: 0;
transition: transform 0.3s ease; // 확대/축소 애니메이션 추가

  &:hover {
    transform: scale(1.1); // 확대 스케일 값을 조절
  }transition: transform 0.3s ease; // 확대/축소 애니메이션 추가

  &:hover {
    transform: scale(1.1); // 확대 스케일 값을 조절
  }
`