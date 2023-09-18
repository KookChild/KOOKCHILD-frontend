import styled from 'styled-components';
import { YELLOW, PRIMARY, GRAY } from '@utility/COLORS'

export const DailyQuizButton = styled.div`
  display: flex; // 여기 추가
  align-items: center; // 세로 중앙 정렬
  background-color: #ffffff;
  flex: 1;
  padding: 30px 20px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative; // 메시지를 겹치게 하기 위해 relative로 설정
  pointer-events: ${props => props.isCompleted ? 'none' : 'auto'}; // 이미 푼 퀴즈에 대해서 클릭 방지
  opacity: ${props => props.isCompleted ? 0.6 : 1};
`;


export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    .checkIcon {
        width: 25px;
        height: 25px;
        background: ${props => {
            if (props.isCorrect) {
                return YELLOW;
            } else {
                return GRAY;
            }
        }} 0% 0% no-repeat padding-box;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
        box-shadow: inset 0px 1px 3px #00000029;
        border-radius: 15px;
        color: white;
        opacity: 1;
    }
`;

export const MiddleSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
        letter-spacing: 0px;
        font-size: 18px;
        color: #010812;
        opacity: 1;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 180px;
    }
`;

export const RightSection = styled.div`
    width: 100px;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 13px;
    .moneyIcon{
        color: ${PRIMARY};
    }
`;

export const CompletedMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${YELLOW};
  padding: 10px;
  border-radius: 8px;
  z-index: 2;
`;