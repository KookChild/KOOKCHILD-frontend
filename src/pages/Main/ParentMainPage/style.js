export const headerContainer = {
  //backgroundColor: '#F6F7FF',
  //width: '390px',
  //height: '600px',
  margin: 'auto',
  padding: '16px',
  boxSizing: 'border-box'
};

export const iconContainer = {
  display: 'flex',
  justifyContent: 'space-between',  // 오른쪽 정렬
  marginTop: '20px',  // 아이콘 위의 간격
  marginRight: '16px', // 아이콘 오른쪽 간격
  marginBottom: '12px',
  gap: '16px'  // 아이콘 사이의 간격
};

export const UserNameContatiner = {
  display: 'flex',
  justifyContent: 'space-between',  // 오른쪽 정렬
  marginTop: '20px',  // 아이콘 위의 간격
  marginLeft: '16px', // 아이콘 오른쪽 간격
  marginBottom: '12px',
  gap: '16px'  // 아이콘 사이의 간격
};


export const textContainer = {
  marginLeft: '16px', // 텍스트 왼쪽에 여백 추가
};

export const TitleContainer = {
  fontSize: '16px', // 폰트 크기
  fontWeight: 'bold', // 폰트 두께
  marginLeft: '16px', // 텍스트 왼쪽에 여백 추가
};

export const iconGroup = {
  marginTop: '10px', // 아이콘 위의 간격
  display: 'flex',
  gap: '16px', // 아이콘 사이의 간격
};

export const buttonSection = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2px',
  marginBottom: '0px'
};

export const buttonTextContainer = {
  position: '',
  left: '10px', // 텍스트를 버튼의 왼쪽 벽에서 약 10px 떨어트림
  bottom: '10px', // 텍스트를 버튼의 하단 벽에서 약 10px 떨어트림
  textAlign: 'left'
};

export const textLine1 = {
  fontSize: '14px', 
  fontWeight: 'bold', 
  display: 'block',
  marginBottom: '5px'
};

export const textLine2 = {
  fontSize: '10px', 
  display: 'block'
};


export const ButtonBaseStyle = {
  transition: 'all 0.3s ease',
  ':hover': {
    backgroundColor: '#f1f1f1', // 원하는 배경색으로 설정
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // 원하는 그림자 효과 설정
  },
  ':active': {
    boxShadow: 'none',
    backgroundColor: '#f1f1f1'
  }
};



export const LinkAccountButton = {
  backgroundColor: '#ffffff',
  flex: 1,
  padding: '48px 20px', // 세로 길이를 조절
  margin: '7.5px',
  marginBottom: '7.5px',
  borderRadius: '12px', // 모서리 라운딩
  border: '1px solid #ccc', // 테두리 없앰
  boxShadow: '0px 2px 4px #00000029', // 그림자 효과
  opacity: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  ...ButtonBaseStyle
};

export const UnlinkedAccountButtonStyle = {
  ...LinkAccountButton,  // 기존의 LinkAccountButton 스타일을 상속
};

export const LinkedAccountButtonStyle = {
  ...LinkAccountButton,  // 기존의 LinkAccountButton 스타일을 상속
  // 필요하다면 여기에 추가 스타일을 작성
};

export const ChildFinanceManagementButton = {
  backgroundColor: '#ffffff',
  flex: 1,
  padding: '30px 20px', 
  marginTop: '0px',
  margin: '7.5px',
  borderRadius: '12px', 
  border: '1px solid #ccc',
  boxShadow: '0px 2px 4px #00000029',
  ...ButtonBaseStyle
};

export const ViewFinanceProductButton = {
  backgroundColor: '#ffffff',
  flex: 0.48,
  padding: '35px 10px',
  margin: '7.5px',
  marginRight: '2px',
  borderRadius: '12px',
  border: '1px solid #ccc',
  boxShadow: '0px 2px 4px #00000029',
  ...ButtonBaseStyle
};

export const RewardManagementButton = {
  backgroundColor: '#ffffff',
  flex: 0.48,
  padding: '35px 10px',
  margin: '7.5px',
  marginLeft: '2px',
  borderRadius: '12px',
  border: '1px solid #ccc', 
  boxShadow: '0px 2px 4px #00000029',
  ...ButtonBaseStyle
};

export const BackToKBStarBankingButton = {
  backgroundColor: '#ffffff',
  flex: 0.4,
  padding: '10px 10px', // 세로 길이를 조절
  marginTop: '22px',
  borderRadius: '12px', // 모서리 라운딩
  border: '1px solid #ccc',
  boxShadow: '0px 2px 4px #00000029', // 그림자 효과
  whiteSpace: 'normal',
  width: '200px',
  ...ButtonBaseStyle
};