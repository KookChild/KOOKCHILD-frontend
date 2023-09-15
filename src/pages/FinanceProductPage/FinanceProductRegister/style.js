import styled from 'styled-components';

// 금융상품 상세

export const ProductTitle = {
  zIndex: '2',
  boxSizing: 'border-box',
  width: '390px',
  padding: '40px',
  marginBottom: '-25px',
  backgroundColor: '#DFEBE4',
  marginLeft: '-20px',
  marginRight: '0px',
};

// 상품 정보 약식 정보

export const ProductOutline = {
  zIndex: '3',
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%', // 부모 컨테이너에 꽉 차게 설정
  backgroundColor: '#fff7',
  borderRadius: '0px',
  padding: '20px',
  marginLeft: '20px',
  marginRight: '0px', // 우측 여백 없음
  marginBottom: '-175px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
};

export const horizontalLine = {
  height: '1px',
  backgroundColor: '#ccc',
  margin: '10px 0',
};

export const CalculateInterest = {
  zIndex: '1',
  position: 'relative',
  boxSizing: 'border-box',
  width: '390px',
  height: '500px',
  backgroundColor: '#fff5',
  borderRadius: '0px',
  paddingTop: '200px', // SetInterestContainer 상하 위치 조절
  paddingLeft: '20px',
  marginLeft: '-20px',
  marginRight: '0px', 
  marginBottom: '35px',
};

// 부모님 지급 금리 입력 가능 컨테이너

export const SetInterestContainer = {
  display: 'flex',
  flexDirection: 'column',
  zIndex: '4',
  boxSizing: 'border-box',
  width: '340px',
  height: '100px',
  padding: '15px',
  paddingRight: '50px',
  backgroundColor: '#9E9BCA',
  marginLeft: '5px',
  marginBottom: '10px',

};

// 값 입력
export const inputStyle1 = {
  width: '25px',
  height: '15px',
  fontSize: '16px',
  padding: '5px',
  margin: '0 10px',
  marginRight: '-75px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  textAlign: 'right',
  fontFamily: 'kbFontRegular',
};

export const inputStyle2 = {
  width: '80px',
  height: '15px',
  fontSize: '16px',
  padding: '5px',
  marginLeft: '5px',
  marginRight: '5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  textAlign: 'right',
  fontFamily: 'kbFontRegular',
};




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
  fontSize: '25px',
  fontWeight: 'bold',
  display: 'block',
  marginBottom: '12px'
};

export const textLine2 = {
  fontSize: '16px',
  display: 'block',
  marginBottom: '4px'
};

export const textLine3 = {
  fontSize: '20px',
  display: 'block',
  marginBottom: '4px',
  paddingLeft: '20px',
  color: '#fff', // 금색
};

export const textLine4 = {
  fontSize: '16px',
  display: 'block',
  marginBottom: '4px',
  paddingLeft: '20px',
  color: '#fff',
};

export const textLine5 = {
  fontSize: '16px',
  display: 'block',
  marginLeft: '-10px',
  marginBottom: '4px'
};

export const centerPlus = {
  marginLeft: '50px',  // 수직으로 중앙 정렬
  color: '#fff',
};

export const highlightText = {
  color: '#FFD700', // 금색
  fontWeight: 'bold'
};

export const explainText = {
  fontSize: '16px',
  display: 'block',
  marginBottom: '4px',
  marginLeft: '10px',
};







export const flexContainer = {
  display: 'flex',
  justifyContent: 'space-between'
};

export const flexContainer2 = {
  width: '350px',
  alignItems: 'center',
  marginLeft: '-10px',
  display: 'flex',
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

// 계산기 버튼
export const calculateInterestButton = {
  backgroundColor: 'lightgrey', // 예를 들어 녹색
  color: 'black', // 글자 색은 흰색
  padding: '14px 20px', // 패딩
  margin: '8px 0', // 마진
  marginLeft: '30px',
  marginBottom: '15px',
  border: 'grey', // 경계선 없음
  borderRadius: '0px', // 모서리 둥글게
  cursor: 'pointer', // 마우스 커서 포인터
};



// 버튼에 이미지를 넣을 스타일
export const buttonImage = {
  width: '65px',
  height: '100px',
  marginRight: '10px'
};

export const buttonImage2 = {
  width: '85px',
  height: '65px',
  marginRight: '0px',
  marginBottom: '0px'
};

export const resultTextStyle = {
  fontFamily: 'kbFontBold',
  fontSize: '18px',
  color: 'red',
  marginLeft: '10px',
  marginRight: '10px',
};