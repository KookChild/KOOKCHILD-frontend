import React from 'react';
import styled from 'styled-components';
import { BsCheck } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';
import { FaQuestion } from 'react-icons/fa'
import { YELLOW, PRIMARY, GRAY } from '@utility/COLORS'

const QuizContainer = styled.div`
    margin: 20px 0;
`;

const QuizHeader = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 15px;
`;

const QuizItem = styled.div`
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    .checkIcon {
        width: 25px;
        height: 25px;
        background: ${props => {
        if (props.correct) {
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

    .moneyIcon {
        color: ${PRIMARY};
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    .questionIcon{
        padding-right: 10px;
        width: 12px;
        height: 12px;
    }
`;

const RewardContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    p{
        font-size: 13px;
    }
`;
const MessageContainer = styled.div`
  width: 340px;
  height: 76.66px;
  background: #E5E5E5;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8E8E8E;
  margin-bottom: 15px;
`;


export const Quiz = ({ quizData }) => {
    return (
        <QuizContainer>
            <QuizHeader>일일 퀴즈 수행 내역</QuizHeader>
            {quizData.length > 0 ? (
                quizData.map(item => (
                    <QuizItem key={item.childName}>
                        <IconContainer>
                            <BsCheck className='checkIcon' correct={quizData.correct} />
                            <div>{item.childName}</div>
                        </IconContainer>
                        <RewardContainer>
                            <AiFillDollarCircle className='moneyIcon' />
                            <p>획득 보상금 <span>{item.totalReward}원</span></p>
                        </RewardContainer>
                    </QuizItem>
                ))
            ) : (
                <MessageContainer>아직 일일 퀴즈를 수행하지 않았습니다</MessageContainer>
            )}

            <QuizHeader>오늘 제출된 금융 퀴즈</QuizHeader>
            {quizData.length > 0 ? (
                quizData.map(item => (
                    <QuizItem>
                        <IconContainer>
                            <FaQuestion className='questionIcon' />
                            <div>{item.quizContent}</div>
                        </IconContainer>
                    </QuizItem>
                ))
            ) : (
                <MessageContainer>아직 일일 퀴즈를 수행하지 않았습니다</MessageContainer>
            )}
        </QuizContainer>
    );
}