import styled from 'styled-components'




export const FilterButtonContainer = styled.div`
  display: block;
  width: 100px;
  height: 50px;  // 높이를 변경
  background-color: ${props => props.backgroundColor};
  border-radius: 12px;  // 원에서 사각형으로 모양 변경
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);  // 그림자 추가
`;

export const FilterButtonText = styled.span`
  font-family: 'kbFont';
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  font-size: 16px;
  border-radius: inherit;
`
