import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraphButton } from '../GraphDetailPage/style';

const MoveChildGraphButton = (props) => { // props 객체를 받도록 수정
  const { childId } = props; // props 객체 내에서 childId를 가져옴
  const navigate = useNavigate();

  const getChildGraphButtonClick = () => {
    navigate(`/graph/detail/${childId}`);
  };

  return (
    <GraphButton onClick={getChildGraphButtonClick}>우리 아이 소비 통계 보러 가기</GraphButton>
  );
};

export default MoveChildGraphButton;
