import styled, { keyframes } from 'styled-components';
import { BROWN } from '@utility/COLORS';
import { YELLOW, PRIMARY, GRAY } from '@utility/COLORS'

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

export const AreaTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;

    padding: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    position: relative;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledTitle = styled.h1`
    font-size: 24px;
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

export const CharacterContainer = styled.div`
    display: flex;
    justify-content: space-between;
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

    // 첫번째 캐릭터의 대화창
    &:first-child {
      border-left-color: #fff;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }

    // 두번째 캐릭터의 대화창
    &:last-child {
      border-right-color: #fff;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const YouTubeButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${YELLOW};
    border-radius: 6px;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: ${PRIMARY};
        color: black;
    }
`;

export const AreaFooterContainer = styled.div`
    position: absolute;
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