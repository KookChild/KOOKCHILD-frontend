import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import {
  AreaTitleContainer,
  AreaContainer,
  StyledTitle,
  StyledChoiceButton,
  StyledSubmitButton,
  AreaFooterContainer,
  QuizReward,
  StyledLeftImage,
  StyledLevel,
} from './style';
import { getDailyQuizDetail, submitQuizAnswer } from '@apis';
import { TopContainer, TopNavigationBar } from '@components';
import { AiFillDollarCircle } from 'react-icons/ai'
import correctImage from './img/correct.png';
import wrongImage from './img/wrong.png';
import Swal from 'sweetalert2';
import KnowX from './img/Lamus.png'
import Answer from './img/Lamu.png'


export const QuizDetailPage = () => {
  const [quiz, setQuiz] = useState({});
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [isUnsure, setIsUnsure] = useState(false);

  const navigate = useNavigate();
  const { quizId } = useParams();

  useEffect(() => {
    getDailyQuizDetail(quizId).then(data => {
      setQuiz(data);
    });
  }, [quizId]);

  useEffect(() => {
    const choices = ['firstChoice', 'secondChoice', 'thirdChoice', 'answer'];
    setShuffledChoices(choices.sort(() => 0.5 - Math.random()));
  }, []);

  const handleChoiceClick = (choiceKey) => {
    setSelectedChoice(choiceKey);
    setIsUnsure(false);
  };


  const handleUnsureClick = () => {
    setIsUnsure(true);
    setSelectedChoice(null);
  };


  const handleSubmit = async () => {
    try {
      const response = await submitQuizAnswer(quizId, selectedChoice);
      const { correct, statusCode } = response;
      if (statusCode === 200) {
        const modalOptions = {
          title: correct ? '<span style="font-size: 20px;">축하합니다! 정답입니다.</span>' : '<span style="font-size: 20px;">오답입니다<br/>다시 도전해보세요!</span><br/><span style="font-size: 15px;">해설을 확인하시면 재도전이 불가능합니다</span>',
          imageUrl: correct ? correctImage : wrongImage,
          imageWidth: 180,
          imageHeight: 180,
          imageAlt: correct ? 'Correct Image' : 'Wrong Image',
          showCancelButton: !correct,
          confirmButtonText: '해설확인',
          cancelButtonText: correct ? '' : '다시풀기',
          customClass: {
            container: 'custom-swal-container',
          },
        };
        Swal.fire(modalOptions).then((result) => {
          if (result.isConfirmed) {
            navigate(`/quiz/${quizId}/explanation`);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate(`/quiz/${quizId}/`);
          }
        });

      } else {
        console.log(response);
        Swal.fire({
          icon: 'error',
          title: '오류 발생',
          text: '서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
          customClass: {
            container: 'custom-swal-container',
          },
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '오류 발생',
        text: '서버와의 통신 중 오류가 발생했습니다.',
        customClass: {
          container: 'custom-swal-container',
        },
      });
    }
  };

  return (
    <TopContainer>
      <TopNavigationBar title={'일일 퀴즈'} />
      <AreaTitleContainer>
      <StyledLevel>{`LEVEL ${quiz.level}`}</StyledLevel>
        <StyledTitle>{quiz.content}</StyledTitle>
        <QuizReward>
          <AiFillDollarCircle className='moneyIcon' /> &nbsp;
          <span className='rewardName'>미션 보상금 &nbsp;</span>
          <span className='reward'>{quiz.totalReward}원</span>
        </QuizReward>
      </AreaTitleContainer>

      <AreaContainer>
        {shuffledChoices.map(choiceKey => (
          <StyledChoiceButton
            key={choiceKey}
            selected={choiceKey === selectedChoice}
            onClick={() => handleChoiceClick(choiceKey)}
          >
            {quiz[choiceKey]}
          </StyledChoiceButton>
        ))}
        <StyledChoiceButton
          selected={isUnsure}
          onClick={handleUnsureClick}
        >
          잘 모르겠어요
        </StyledChoiceButton>
      </AreaContainer>

      <AreaFooterContainer>
      {!isUnsure && selectedChoice && <StyledLeftImage src={Answer} alt="Answer Image" />}
      {isUnsure && <StyledLeftImage src={KnowX} alt="KnowX Image" />}
        <StyledSubmitButton
          onClick={handleSubmit}
          disabled={!selectedChoice && !isUnsure}
        >
          제출하기
        </StyledSubmitButton>

      </AreaFooterContainer>
    </TopContainer>
  );
}
