


// 텍스트 컨테이너

export const textContainer = {
    marginLeft: '12px', 
    display: 'flex',
    justifyContent: 'space-between', 
  }
  
  export const buttonTextContainer = {
    position: 'relative', // 상대적 위치 지정
    left: '10px',
    bottom: '10px',
    textAlign: 'left',
    display: 'flex',  // 요소를 flex로 설정
    justifyContent: 'space-between'  // 요소 사이의 공간을 균등하게 배분
  };
  
 

  export const textLine1 = {
    fontSize: '16px', 
    fontWeight: 'bold', 
    display: 'block',
    marginBottom: '5px'
  };

   // 아이콘 스타일
export const textLine1Icon = {
  fontSize: '16px', // 글자 크기와 유사하게 설정
  fontWeight: 'bold',
  marginLeft: '4px' // 아이콘과 텍스트 사이의 간격
};
  
  export const textLine2 = {
    fontSize: '12px', 
    display: 'block'
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
    flex: 1,
    padding: '35px 20px', // 세로 길이를 조절
    margin: '8px',
    borderRadius: '12px', // 모서리 라운딩
    border: '1px solid #ccc', // 테두리 없앰
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 그림자 효과
  }

// 버튼에 이미지를 넣을 스타일
export const buttonImage = {
  position: 'absolute',  // 절대적 위치 지정
  right: '10px',  // 오른쪽에서 10px 떨어진 위치에 배치
  bottom: '10px',  // 아래쪽에서 10px 떨어진 위치에 배치
  width: '50px',  // 이미지의 너비
  height: '50px'  // 이미지의 높이
};
