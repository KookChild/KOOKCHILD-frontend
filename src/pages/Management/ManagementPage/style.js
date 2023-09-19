import styled from 'styled-components'

export const MainContent = styled.div`
  flex-grow: 1;
`

export const Footer = styled.div`
  text-align: center;
`

export const BankContentContainer = styled.div`
  width: 100%;
  height : 100%;
  padding: 13px 0px;
`

export const PictureSelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
   flex-direction: column; /* 자식 요소를 세로로 정렬합니다 */
  margin: 0px 0;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  border-radius: 12px;
`

export const BankInfoContainer = styled.div`
  display : flex;
  flex-direction : column;
  margin-top:4px;
`
export const MonthlyContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin : 10px 0px;
`
export const MonthlyContent = styled.div`

  width: 348px;
  height: 80px;
  overflow: hidden;

  padding: 0;
  display: flex; /* MonthlyItem을 가로로 배치하기 위해 추가 */
  // 가로 배치하는데 좌우로 벌어지게
  justify-content: space-around;
  gap: 9px;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

export const MonthlyItem = styled.div`

width: 177px;
height: 78px;
display:flex;
flex-direction:column;
padding:0px 12px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid rgb(204, 204, 204);
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
border-radius: 12px;
opacity: 1;
border-radius: 10px;
font-size: 16px;
font-weight: bold;
text-align: center;
white-space: nowrap;
display: flex;
flex-direction : column;
justify-content:space-evenly;
`

export const MoveChildGraphButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  
`
export const AccountButtons = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:flex-end;

`
export const AccountDescription = styled.div`
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  box-shadow: transparent;
  border-radius: 10px;
`;

export const ChildName = styled.span`
span {
  /* UI Properties */
  text-align: left;
  color: #010812;
  padding: 10px;
}

/* 추가한 스타일 */
background-color: #f9c515;
margin : 10px 0px;
height: 40px;
width : auto;
border-radius: 10px;
border: 1px solid #ccc;
padding: 5px 10px;
font-size: 14px;
`

export const InfoTextWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 컬럼 방향으로 아래로 나열 */
  align-items: center; /* 수평 가운데 정렬 */
  gap: 20px; /* 각 요소 사이의 간격 조절 */
  text-align: center; /* 텍스트 가운데 정렬 */
  margin-top: 20px; /* 원하는 간격 설정 */
  height : 358px;
`;

export const InfoBox = styled.div`

background-color: #f9c515;
  width: 250px; /* 너비를 더 넓게 설정 */
  height: 60px; /* 높이 설정 */
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  padding: 10px; /* 내부 여백 설정 */
  border-radius: 10px; /* 라운드된 모서리 설정 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  border-radius: 10px;
  border: 1px solid #ccc;
`;
export const InfoText = styled.p`
  /* <p> 태그에 대한 스타일 설정 */
  margin: 0; /* 기본 마진 제거 */
  font-size: 16px; /* 글꼴 크기 설정 */
  color: #333; /* 글꼴 색상 설정 */
  /* 다른 스타일을 추가하세요. */
`;

export const ChildSelectContainer = styled.div`
width : 349px;
  height: 100px;
  display: flex;
  justify-content:  flex-start;
  align-items: flex-start;
  padding: 10px 0px;
`;

export const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding : 0px 5px;
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 30%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;

`;

export const Image = styled.img`
  width: 100%;
  // height: 163px;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const NameDiv = styled.div`
  padding: 5px 0px; /* 아주 작은 padding 값을 적용 */
  /* 다른 스타일을 여기에 추가할 수 있습니다. */
`;

export const SendButtonContainer = styled.div`
  position: relative;
  bottom: 0;
  right: 0;

`;

export const Button = styled.button`
  background-color: #f9c515;
  width: auto; /* 자동으로 너비를 설정하여 버튼 크기를 텍스트에 맞게 만듭니다 */
  height: 40px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  padding: 5px 10px; /* 좌우 여백을 조절하여 텍스트와 버튼의 크기를 맞춥니다 */
  font-size: 14px;
  cursor: pointer;
  margin: 2px 0px;
  width : 120px;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 스타일 지정 */
`;

export const commonSwalOptions = {
  customClass: {
    container: 'custom-swal-container',
  },
};

export const StyledChildName = styled.div`
font-family: sdLi;
font-weight: lighter;
width:100%;
font-size:13px;
 text-align: left; /* 폰트를 왼쪽 정렬합니다. */
`;

export const CustomSwalContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  overflow-y: auto;
`;

export const AccountInfo = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  width:93%;
  border-radius: 10px;
  padding: 4px 20px; /* 좌우 여백 추가 */
`;

// 이 두 스타일을 하나로 묶는 컨테이너를 생성합니다.
export const AccountInfoContainer = styled.div`
  display: flex;
  flex-direction: column; /* 위아래로 배치 */
  align-items: center;
  justify-content:flex-start;
  text-align: center;
  font-size: 16px;
  
`;

// Span 태그를 생성합니다.
export const StyledAccountNum = styled.span`
  /* 추가적인 스타일을 적용할 수 있습니다. */
   text-align: left; /* 폰트를 왼쪽 정렬합니다. */
   color :#E9C648;
`;

export const ThisMonthType=styled.div`
text-align: left; /* 텍스트를 왼쪽 정렬 */
font-size:14px;
`
export const ThisMonthMoney = styled.div`
text-align: right; /* 폰트를 왼쪽 정렬합니다. */
font-family:sdMe;
color:#4D6DCC;
font-size:20px;
`