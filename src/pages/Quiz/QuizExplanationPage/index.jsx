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
  DescriptionBox,
  LoadingContainer,
  LoadingText,
  Spinner
} from './style';
import { getQuizExplanation } from '@apis';
import { TopContainer, TopNavigationBar } from '@components';
import Loading from './img/BearH.png'

export const QuizExplanationPage = () => {
  const [quiz, setQuiz] = useState({});
  const { quizId } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getQuizExplanation(quizId).then(data => {
        setQuiz(data);
        setLoading(false);
    }).catch(err => {
        console.error(err);
        setLoading(false);
    });
}, [quizId]);

if (loading) {
  return (
      <TopContainer>
          <TopNavigationBar title={'퀴즈 해설'} />
          <ContentContainer>
              <LoadingContainer>
                  <div>
                      <Spinner />
                      <LoadingText>해설을 가져오는 중입니다...</LoadingText>
                      <img src={Loading} style={{margintBottom:'10px'}}/>
                  </div>
              </LoadingContainer>
          </ContentContainer>
      </TopContainer>
  );
}


  const handleConfirm = () => {
    navigate('/child');
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
