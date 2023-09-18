


// 텍스트 컨테이너

export const textContainer = {
  marginLeft: '10px',
  flex: 1, // 가능한 모든 공간을 차지
};

export const buttonTextContainer = {
  display: 'flex',
  flexDirection: 'row',  // 가로 방향으로 아이템 배치
  justifyContent: 'space-between', // 좌우로 요소를 배치
  alignItems: 'center',  // 세로 중앙 정렬
};

export const textLine1 = {
  fontSize: '16px',
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '12px'
};

export const textLine2 = {
  fontSize: '12px',
  display: 'block',
  marginBottom: '4px'
};

export const highlightText = {
  color: '#FFD700', // 금색
  fontWeight: 'bold'
};

// 아이콘 스타일
export const textLine1Icon = {
  fontSize: '16px', // 글자 크기와 유사하게 설정
  fontWeight: 'bold',
  marginLeft: '4px' // 아이콘과 텍스트 사이의 간격
};




// 버튼 컨테이너

export const buttonSection = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2px',
  marginBottom: '5px',
}

export const FinanceProductButton = {
  
  backgroundColor: '#ffffff',
  //flex: 1,
  height: '95px',
  padding: '25px 20px', 
  margin: '8px',
  borderRadius: '12px', 
  border: '1px solid #ccc', 
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
}

// 버튼에 이미지를 넣을 스타일
export const buttonImage = {
  width: '65px', 
  height: '100px',  
  marginRight: '10px'
};

export const buttonImage2 = {
  width: '85px', 
  height: '85px',  
  marginRight: '0px',
  marginBottom: '0px'
};
