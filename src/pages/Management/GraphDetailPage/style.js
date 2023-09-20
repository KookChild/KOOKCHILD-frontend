import styled from 'styled-components'

export const GraphButton = styled.button`
  background-color: #f9c515;
  width: 100%; /* 좌우로 크게 설정 */
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  &:hover {
    background-color: gold;
    border-color: gold;
  }
  padding: 10px; /* 좌우 여백을 크게 조절하여 텍스트와 버튼의 크기를 맞춥니다 */
  font-size: 16px; /* 텍스트 크기를 크게 설정 */
  cursor: pointer;
  font-family: sdSb;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* 그림자 스타일 지정 */
`

export const DateRangePickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const DateSelection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const DatePicker = styled.input`
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`

export const DateSeparator = styled.div`
  margin: 0 10px;
`

export const DateRangeDisplay = styled.div`
  font-weight: bold;
`
