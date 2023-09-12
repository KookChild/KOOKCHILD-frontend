import React from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트를 사용하여 박스 스타일링
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 45%; /* 너비를 조절하여 공백을 넣어 적절하게 배치할 수 있습니다. */
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChildHistory = () => {
  return (
    <BoxContainer>
      <Box>
        <h2>첫 번째 박스</h2>
        <p>이 곳에 내용을 추가하세요.</p>
      </Box>
      <Box>
        <h2>두 번째 박스</h2>
        <p>이 곳에 다른 내용을 추가하세요.</p>
      </Box>
    </BoxContainer>
  );
};

export default ChildHistory;



