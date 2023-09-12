import styled from 'styled-components';

// 화면을 중앙 정렬하는 스타일 컴포넌트
export const CenteredContainer = styled.div`
  width: 360px; /* 가로 크기 */
  height: 600px; /* 세로 크기 */
  position: absolute;
  top: 50%; /* 세로 중앙 정렬 */
  left: 50%; /* 가로 중앙 정렬 */
  transform: translate(-50%, -50%); /* 가로, 세로 중앙 정렬을 위한 변환 */
  background-color: #f0f0f0; /* 배경색을 원하는 색상으로 변경 */
  border: 1px solid #ccc; /* 테두리 스타일을 원하는 스타일로 변경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 */
  padding: 20px; /* 내부 여백 설정 */

  display: flex;
  flex-direction: column; /* 자식 컴포넌트를 세로로 배치 */
`

export const Header = styled.div`
  padding: 10px;
  text-align: center;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const HeaderImage = styled.img`
  width: 20px; /* 이미지 너비 조정 */
  height: 20px; /* 이미지 높이 조정 */
  margin-right: 30px; /* 이미지와 title 간의 간격 설정 */
`

export const HeaderTitle = styled.h1`
  font-size: 18px; /* title의 글꼴 크기 조정 */
  font-weight: bold; /* title 텍스트 굵게 설정 */
  margin: 0; /* title의 margin 제거 */
`

export const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`
export const Form = styled.form`
margin-top:120px;
text-align:center;
`;

export const Input = styled.input`
  width: 300px;
  padding: 10px 15px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  height: 40px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 3px #00000029;
  border-radius: 6px;
  opacity: 1;
`;

export const Button = styled.button`
  width: 300px;
  padding: 10px 15px;
  background-color: #FFBC00;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8D744A;
  }
`;