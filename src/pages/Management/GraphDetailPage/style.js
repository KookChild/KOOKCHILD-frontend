import { BROWN, GRAY, PINK, PRIMARY, YELLOW } from '@utility/COLORS'
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
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  padding-left: 35px;
`

export const DateSelection = styled.div`
  display: flex;
  align-items: center;
`
export const FilterButton = styled.div`
  height: 30px;
  width: 100px;
  border-radius: 30px;
  background-color: ${PRIMARY};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const ShowButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ShowButton = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  cursor: pointer;
  font-family: kbFontBold;
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

export const CenteredContainer = styled.div`
  width: 360px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

export const Header = styled.div`
  padding: 10px;
  display: flex; /* 자식 요소들을 가로로 나열하기 위해 추가 */
  background-color: #ececec;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.h1`
  font-size: 24px; /* 크기를 더 크게 조정 */
  font-weight: bold;
  margin: 0;
`

export const MainContent = styled.div``

export const DateRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DateRangeTitle = styled.div`
  text-align: left; /* 좌측 정렬 */
`

export const DateRangeText = styled.div`
  text-align: right; /* 우측 정렬 */
`

// 4x2 표 컴포넌트
export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  margin-top: 20px; /* 표 위 여백을 조절하세요. */
`

export const TableRow = styled.tr``

export const TableHeader = styled.th`
  background-color: #ececec;
  border: 1px solid #ccc;
  padding: 10px;
`

export const TableCell = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 14px; /* 텍스트의 글꼴 크기를 조절 */
  width: auto; /* 셀 너비를 내용에 따라 자동으로 조절 */
`
export const DatePickerContainer = styled.div`
  margin-right: 20px;
`
