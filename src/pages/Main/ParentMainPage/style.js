
import { PRIMARY, GRAY, BROWN, YELLOW } from '@utility/COLORS'


export const iconContainer = {
  display: 'flex',
  justifyContent: 'space-between',  // 오른쪽 정렬
  marginTop: '20px',  // 아이콘 위의 간격
  marginRight: '16px', // 아이콘 오른쪽 간격
  marginBottom: '12px',
  gap: '16px'  // 아이콘 사이의 간격
};

export const TopTextContainer = {
  fontFamily: 'kbFontBold',
  fontSize: '18px',
  padding: '15px ',
}

export const UserNameContatiner = {
  fontFamily: 'kbFont',
  fontSize: '20px',
  padding: '15px ',
  marginBottom: '0px',
}

export const textContainer = {
  marginLeft: '16px', // 텍스트 왼쪽에 여백 추가
};

export const iconGroup = {
  marginTop: '20px', // 아이콘 위의 간격
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

export const buttonTextContainer2 = {
  position: '',
  left: '10px', // 텍스트를 버튼의 왼쪽 벽에서 약 10px 떨어트림
  bottom: '10px', // 텍스트를 버튼의 하단 벽에서 약 10px 떨어트림
  textAlign: 'left',
  paddingTop : '8px'
};

export const AccounttextLine1 = {
  fontSize: '18px', 
  fontWeight: 'bold', 
  display: 'block',
  marginBottom: '5px'
};

export const AccounttextLine2 = {
  fontSize: '14px', 
  display: 'block',
  marginBottom: '5px'
};



export const textLine1 = {
  fontSize: '18px', 
  fontWeight: 'bold', 
  display: 'block',
  marginBottom: '5px'
};

export const textLine2 = {
  fontSize: '15px', 
  display: 'block'
};

export const flexContainer={
  display: 'flex',
  flexDirection : 'column',
  justifyContent: 'center'
}


export const ButtonBaseStyle = {
  fontFamily: 'kbFont',
  boxShadow: '0px 4px 6px #00000029',
};

export const managePicture2 = {
  width: '77px'
}


export const managePicture = {
  width: '70px'
}

export const LinkAccountButton = {
  backgroundColor: '#f6f6f6',
  flex: 1,
  padding: '48px 20px', // 세로 길이를 조절
  margin: '7.5px',
  marginBottom: '7.5px',
  borderRadius: '8px', // 모서리 라운딩
  border: '1px solid #ccc', // 테두리 없앰
  boxShadow: '0px 4px 6px #00000029', // 그림자 효과
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
  backgroundColor: '#f6f6f6',
  flex: 1,
  padding: '30px 20px', 
  marginTop: '0px',
  margin: '7.5px',
  borderRadius: '12px', 
  border: '1px solid #ccc',
  boxShadow: '0px 2px 4px #00000029',
  ...ButtonBaseStyle,
  display:'flex',
  justifyContent: 'inherit',
  alignItems: 'center'

};

export const ViewFinanceProductButton = {
  backgroundColor: '#f6f6f6',
  flex: 0.48,
  padding: '23px 10px',
  margin: '7.5px',
  marginRight: '2px',
  borderRadius: '12px',
  border: '1px solid #ccc',
  boxShadow: '0px 2px 4px #00000029',
  ...ButtonBaseStyle,
  display:'flex',
  flexDirection : 'column',
  justifyContent: 'space-evenly', // 수직 방향에서 요소들을 균등하게 배치
  alignItems: 'baseline'
};

export const RewardManagementButton = {
  backgroundColor: '#f6f6f6',
  flex: 0.48,
  padding: '23px 10px',
  margin: '7.5px',
  marginLeft: '2px',
  borderRadius: '12px',
  border: '1px solid #ccc', 
  boxShadow: '0px 2px 4px #00000029',
  ...ButtonBaseStyle,
  display:'flex',
  flexDirection : 'column',
  alignItems: 'baseline',
  justifyContent: 'inherit'
};

export const BackToKBStarBankingButton = {
  backgroundColor: 'rgb(204, 204, 204)',
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