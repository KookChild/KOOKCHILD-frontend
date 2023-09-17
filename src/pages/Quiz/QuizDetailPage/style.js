import styled, { keyframes } from 'styled-components';
import { PRIMARY, GRAY, BROWN } from '@utility/COLORS'

const slideFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const AreaTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 150px;

    padding: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    position: relative;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledTitle = styled.h1`
    font-size: 24px;
    margin-top: 20px;
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

export const QuizReward = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 10px;
    .reward{
        color: ${PRIMARY};
        font-size: 15px;
        font-family: sdMe;
    }
    .moneyIcon{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        box-shadow: inset 0px 1px 3px #00000029;
        border-radius: 15px;
        color: white;
        opacity: 1;
        color: ${PRIMARY};
    }
`;

export const AreaContainer = styled.div`
`;

export const StyledChoiceButton = styled.button`
    display: block;
    width: 80%;
    margin: 15px auto;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.selected ? PRIMARY : GRAY};
    color: ${props => props.selected ? 'black' : 'white'};
    font-size: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledLeftImage = styled.img`
    width: 150px;
    height: 150px;
    animation: ${slideFromLeft} 0.5s forwards;
`;

export const StyledSubmitButton = styled.button`
    width: 350px;
    height: 50px;
    background: ${props => props.isDisabled ? 'gray' : PRIMARY};
    border-radius: 6px;
    border: none;
    color: black;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const AreaFooterContainer = styled.div`
    width: 350px;
    padding-bottom : 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0px;
    margin-top: 50px;
    z-index: 1;

    &:last-child {
        margin-bottom: 0;
    }
`;