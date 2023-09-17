import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  AreaTitleContainer,
  AreaContainer,
  StyledTitle,
  StyledChoiceButton,
  AreaFooterContainer,
  StyledLevel,
  StyledButton,
  ContentContainer,
  Description,
  DescriptionBox
} from './style';
import { getQuizExplanation } from '@apis';
import { TopContainer, TopNavigationBar } from '@components';

export const QuizExplanationPage = () => {
  const [quiz, setQuiz] = useState({});
  const { quizId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getQuizExplanation(quizId).then(data => {
      setQuiz(data);
    });
  }, [quizId]);

  const handleConfirm = () => {
    navigate('/child');  // 메인 페이지로 이동
  };

  return (
    <TopContainer>
      <TopNavigationBar title={'퀴즈 해설'} />
      <ContentContainer>
        <AreaTitleContainer>
          <StyledLevel>{`LEVEL ${quiz.level}`}</StyledLevel>
          <StyledTitle>{quiz.content}</StyledTitle>
        </AreaTitleContainer>

        <AreaContainer>
          <StyledChoiceButton isCorrect>{quiz.answer}</StyledChoiceButton>
          <StyledChoiceButton>{quiz.firstChoice}</StyledChoiceButton>
          <StyledChoiceButton>{quiz.secondChoice}</StyledChoiceButton>
          <StyledChoiceButton>{quiz.thirdChoice}</StyledChoiceButton>
        </AreaContainer>
        <AreaContainer>
          <DescriptionBox>
            <Description>{quiz.explanation}</Description>
          </DescriptionBox>
        </AreaContainer>
      </ContentContainer>
      <AreaFooterContainer>
        <StyledButton onClick={handleConfirm}>확인</StyledButton>
      </AreaFooterContainer>
    </TopContainer>
  );
}
