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
  padding: 21px 0px;
`

export const PictureSelectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10px 0;
`

export const BankInfoContainer = styled.div`
  padding: 10px 0;
  height : 320px;
  display : flex;
  flex-direction : column;
`
export const MonthlyContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin : 10px 0px;
`
export const MonthlyContent = styled.div`

  width: 360px;
  height: 91px;
  margin: 10px 0px;
  overflow: hidden;

  padding: 0;
  display: flex; /* MonthlyItem을 가로로 배치하기 위해 추가 */
  // 가로 배치하는데 좌우로 벌어지게
  justify-content: center;
  gap: 12px;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

export const MonthlyItem = styled.div`

width: 160px;
height: 90px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 2px #00000029;
border-radius: 12px;
opacity: 1;
border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  display: flex;
  flex-direction : column;
  justify-content:center;
`

export const MoveChildGraphButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  
`
export const AccountButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px; /* 요소 사이의 간격을 조절합니다. */
`
export const AccountDescription = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  height : 320px;
  background-color: #ececec;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
  width : 150px;
  bottom: 0;
  right: 0;
  margin: 20px;

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
  width : 100%;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 스타일 지정 */
`;

export const commonSwalOptions = {
  customClass: {
    container: 'custom-swal-container',
  },
};

export const StyledSpan = styled.span`
font-family: sdSb;
`;