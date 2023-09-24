import styled, { keyframes } from 'styled-components';
import { PRIMARY, BROWN, YELLOW, GRAY } from '@utility/COLORS';

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;  // 이 부분 추가
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
flex-direction: column;
img{
  margin-left: 20px;
}
`;

export const Spinner = styled.div`
  margin: auto;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid ${PRIMARY};
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.p`
  width: 300px;
  margin-top: 20px;
  font-size: 1.2em;
  text-align: center;
`;


export const ContentContainer = styled.div`
  padding-bottom: 15px;
`;

export const AreaTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    position: relative;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    min-height: 100px;
`;


export const StyledTitle = styled.h1`
    font-size: 21px;
    margin-top: 10px;
    text-align: center;
`;

export const StyledLevel = styled.div`
  font-size: 11px;
  border: 1px solid ${BROWN};
  color: ${BROWN};
  border-radius: 5px;
  width: 55px;
  text-align: center;
`

export const AreaContainer = styled.div`
`;

export const StyledChoiceButton = styled.div`
    display: block;
    width: 80%;
    margin: 15px auto;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.isCorrect ? PRIMARY : '#f1f1f1'};
    color: ${props => props.isCorrect ? '#fff' : '#000'};
    font-size: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
`;

export const StyledButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${PRIMARY};
    border-radius: 6px;
    border: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: ${YELLOW};
  }
`;

export const AreaFooterContainer = styled.div`
    width: 350px;
    padding-bottom : 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // position: fixed;
    bottom: 0px;
    margin-top: 50px;
    z-index: 1;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const DescriptionBox = styled.div`
  padding: 20px;
  position: relative;
  margin-top: 30px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: ${slideUp} 1s forwards;
`;

export const Description = styled.div`
    font-size: 16px;
    line-height: 1.5;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    background: white;
`;


export const CharacterContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    margin: 10px 0;
    animation: ${slideInFromBottom} 1s forwards;
    animation-delay: ${props => props.delay || "0s"};
    opacity: 0;

    &.secondContainer {
      padding: 0px;
      margin-top: 40px;
    }
`;

export const QuestionCharacter = styled.div`
    text-align: center;
    animation: ${slideInFromBottom} 1s forwards;
    animation-delay: ${props => props.delay || "0s"};
    opacity: 0;
`

export const CharacterImage = styled.img`
    width: 120px;
    height: auto;
    position: relative;

    &.firstImage {
      right: -30px;
    }
    &.secondImage {
      right: -10px;
    }
`;

export const ChatBubble = styled.div`
  font-size: 15px;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  max-width: 70%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;

    // 두번째 캐릭터의 대화창
    &:last-child {
      border-right-color: #fff;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const UserInput = styled.input`
    width: 200px;
    font-size: 15px;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid ${GRAY};
    max-width: 70%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-right: 10px;
`;

export const AskButton = styled.button`
    font-size: 15px;
    background-color: ${PRIMARY};
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: ${YELLOW};
    }
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8); /* 반투명 흰색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // 다른 요소 위에 오게 설정
`;

export const LoadingAnswerText = styled.span`
    position: absolute;
    bottom: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;

export const LoadingMessage = styled.div`
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  font-size: 1.2em;
  display: flex;           // Flexbox를 사용하여 내부 아이템들을 배치
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
