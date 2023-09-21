import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  AreaTitleContainer, AreaContainer, StyledTitle, StyledChoiceButton,
  AreaFooterContainer, StyledLevel, StyledButton, ContentContainer,
  Description, DescriptionBox, LoadingContainer, LoadingText,
  Spinner, CharacterContainer, CharacterImage, ChatBubble,
  UserInput, AskButton, LoadingOverlay, LoadingAnswerText, LoadingMessage, QuestionCharacter
} from './style';
import { getQuizExplanation, sendQuestionToAPI } from '@apis';
import { TopContainer, TopNavigationBar } from '@components';
import Loading from './img/BearH.png';
import character2 from './img/BearH.png';
import loadingAnimation from 'src/animations/zzsDbpkm5P.json'

export const QuizExplanationPage = () => {
  const [quiz, setQuiz] = useState({});
  const { quizId } = useParams();
  const [loading, setLoading] = useState(true);
  const [userQuestion, setUserQuestion] = useState("");
  const [characterResponse, setCharacterResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmitQuestion = async () => {
    setIsLoading(true);
    try {
      const { answer } = await sendQuestionToAPI(userQuestion);
      setCharacterResponse(answer);
    } catch (error) {
      console.error("Error fetching the character's response", error);
    } finally {
      setIsLoading(false);
    }
  };

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
              <img src={Loading} style={{ margintBottom: '10px' }} />
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
      <CharacterContainer className="leftAligned" delay="1s">
        <ChatBubble className="secondBubble">더 궁금한 점이 있나요?</ChatBubble>
        <CharacterImage className="secondImage" src={character2} alt="두번째 캐릭터" />
      </CharacterContainer>
      <QuestionCharacter delay="1s">
        <UserInput value={userQuestion} onChange={e => setUserQuestion(e.target.value)} placeholder="여기에 질문을 작성해주세요." />
        <AskButton onClick={handleSubmitQuestion}>질문</AskButton>
      </QuestionCharacter>

      {characterResponse && (
        <CharacterContainer delay="1s" className='secondContainer'>
          <ChatBubble className="secondBubble">{characterResponse}</ChatBubble>
          <CharacterImage className="secondImage" src={character2} alt="두번째 캐릭터" />
        </CharacterContainer>
      )}
      <AreaFooterContainer>
        <StyledButton onClick={handleConfirm}>확인</StyledButton>
      </AreaFooterContainer>
      {isLoading && (
        <LoadingOverlay>
          <LoadingMessage>
            <Lottie
              animationData={loadingAnimation}
              style={{ width: "200px", height: "300px" }}
            />
            <LoadingAnswerText>답변을 불러오는 중입니다</LoadingAnswerText>
          </LoadingMessage>
        </LoadingOverlay>
      )}
    </TopContainer>
  );
}
