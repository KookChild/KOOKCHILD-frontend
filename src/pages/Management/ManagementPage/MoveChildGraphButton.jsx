import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 가져오기
import { GraphButton } from '../GraphDetailPage/style';

const MoveChildGraphButton = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 가져오기

  const getChildGraphButtonClick = () => {
    // '/graph/detail' 경로로 이동
    navigate('/graph/detail');
  };

  return (
    <GraphButton onClick={getChildGraphButtonClick}>우리 아이 소비 통계 보러 가기</GraphButton>
  );
};

export default MoveChildGraphButton;