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


export const QuizDetailPage = () => {
  const [quiz, setQuiz] = useState({});
  const [selectedChoice, setSelectedChoice] = useState(null); // 선택된 선택지
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
    setIsUnsure(false); // "잘 모르겠어요" 선택 상태 해제
  };


  const handleUnsureClick = () => {
    setIsUnsure(true);
    setSelectedChoice(null); // 기존 선택지 선택 해제
  };


  const handleSubmit = async () => {
    try {
      const response = await submitQuizAnswer(quizId, selectedChoice);
      const { correct, statusCode } = response;
  
      if (statusCode === 200) {
        const modalOptions = {
          title: correct ? '정답입니다!' : '오답입니다.',
          text: correct ? '축하합니다! 정답을 선택했습니다.' : '아쉽습니다. 다시 도전해보세요.',
          imageUrl: correct ? correctImage : wrongImage,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: correct ? 'Correct Image' : 'Wrong Image',
          showCancelButton: true,
          confirmButtonText: '해설확인',
          cancelButtonText: '홈으로',
        };

        Swal.fire(modalOptions).then((result) => {
          if (result.isConfirmed) {
            navigate(`/quiz/${quizId}/explanation`);
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate('/child');
          }
        });

      } else {
        Swal.fire({
          icon: 'error',
          title: '오류 발생',
          text: '서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '오류 발생',
        text: '서버와의 통신 중 오류가 발생했습니다.',
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

      {isUnsure && <StyledLeftImage src={KnowX} alt="KnowX Image" />}
      {/* {!isUnsure && selectedChoice && <StyledRightImage src={Check} alt="Check Image" />} */}

      <AreaFooterContainer>
        <StyledSubmitButton
          isDisabled={!selectedChoice && !isUnsure}
          onClick={handleSubmit}
          disabled={!selectedChoice && !isUnsure}
        >
          제출하기
        </StyledSubmitButton>

      </AreaFooterContainer>
    </TopContainer>
  );
}
