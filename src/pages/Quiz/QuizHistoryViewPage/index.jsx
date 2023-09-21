import React, { useState, useEffect } from 'react';
import { getQuizHistory } from '@apis';
import { useNavigate } from 'react-router-dom';
import { TopContainer, TopNavigationBar } from '@components';
import {
  ChildItemContainer,
  ChildUpSection,
  ChildLeftSection,
  ChildRightSection,
  ChildUnderSection,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from './style';
import { BsCheck } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';

export const QuizHistoryViewPage = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [historyList, setHistoryList] = useState([]);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('T')[0].split('-');
    return `${year}년 ${month}월 ${day}일`;
  };

  const formatReward = (reward) => {
    const parsedReward = parseInt(reward, 10);
    if (isNaN(parsedReward)) return reward;
    return new Intl.NumberFormat('ko-KR').format(parsedReward);
  };

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await getQuizHistory(searchKeyword);
      setHistoryList(data.historyQuizList);
    };

    fetchHistory();
  }, [searchKeyword]);

  const goToDetailPage = (quizId) => {
    navigate(`/quiz/detail/${quizId}`);
  };

  return (
    <TopContainer>
      <TopNavigationBar title={'퀴즈 히스토리'} />

      <SearchContainer>
        <SearchIcon className='searchIcon' />
        <SearchInput
          placeholder="검색"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </SearchContainer>

      {historyList.map((item) => (
        <ChildItemContainer key={item.id} onClick={() => goToDetailPage(item.id)}>
          <ChildUpSection>{formatDate(item.solvedDate)}</ChildUpSection>
          <ChildLeftSection>
            {item.correct ? <BsCheck className='checkIcon' /> : null}
          </ChildLeftSection>
          <ChildRightSection level={item.level}>
            <h3 className='title'>{item.answer}</h3>
            <p className='level'>LV. {item.level}</p>
          </ChildRightSection>
          <ChildUnderSection>
            <p>
              <AiFillDollarCircle className='moneyIcon' /> 퀴즈 보상금{' '}
              <span>{formatReward(item.totalReward)}원</span>
            </p>
          </ChildUnderSection>
        </ChildItemContainer>
      ))}
    </TopContainer>
  );
};