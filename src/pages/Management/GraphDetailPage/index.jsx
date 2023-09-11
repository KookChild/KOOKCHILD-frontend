import React from 'react'
import styled from 'styled-components'
import CategoryPieChart from './CategoryPieChart' // 카테고리 파이 차트 컴포넌트 추가
import BarChart from './BarChart'; // 막대 그래프 컴포넌트 추가

const CenteredContainer = styled.div`
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

const Header = styled.div`
  padding: 10px;
  display: flex; /* 자식 요소들을 가로로 나열하기 위해 추가 */
  background-color: #ececec;
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`

const HeaderTitle = styled.h1`
  font-size: 24px; /* 크기를 더 크게 조정 */
  font-weight: bold;
  margin: 0;
`

const MainContent = styled.div`
  flex-grow: 1;
  overflow: auto;
  flex-direction: column; /* 자식 컴포넌트를 세로로 배치 */
  align-items: center; /* 세로 가운데 정렬을 설정 */
  border: 2px solid #ffcc00; /* 테두리 추가 (노란색) */
  background-color: #fff; /* 배경색을 흰색으로 설정 */
  border-radius: 10px; /* 모든 테두리를 둥글게 만듭니다. */
  padding: 20px;
`

const DateRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const DateRangeTitle = styled.div`
  text-align: left; /* 좌측 정렬 */
`

const DateRangeText = styled.div`
  text-align: right; /* 우측 정렬 */
`


// 4x2 표 컴포넌트
const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  margin-top: 20px; /* 표 위 여백을 조절하세요. */
`

const TableRow = styled.tr``

const TableHeader = styled.th`
  background-color: #ececec;
  border: 1px solid #ccc;
  padding: 10px;
`

const TableCell = styled.td`
  border: 1px solid #ccc;
  width: 50%;
  padding: 10px;
`

// 카테고리 데이터 예시
const categoryData = [
  { title: '카테고리 1', value: 15, color: '#FF5733' },
  { title: '카테고리 2', value: 20, color: '#33FF57' },
  { title: '카테고리 3', value: 40, color: '#5733FF' },
  { title: '카테고리 4', value: 25, color: '#33A3FF' },
]

// 표 데이터 예시
const tableData = [
  {
    month: '2023-01',
    expensePercentage: '25%',
    savingsPercentage: '20%',
  },
  {
    month: '2023-02',
    expensePercentage: '30%',
    savingsPercentage: '25%',
  },
  {
    month: '2023-03',
    expensePercentage: '35%',
    savingsPercentage: '30%',
  },
  {
    month: '2023-04',
    expensePercentage: '28%',
    savingsPercentage: '23%',
  },
  {
    month: '2023-05',
    expensePercentage: '32%',
    savingsPercentage: '27%',
  },
]
// 막대 그래프를 담을 컨테이너
const BarChartContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  padding: 20px;
`

// 막대 그래프 데이터 예시
const barChartData = {
  labels: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06'],
  expenses: [3000, 4500, 6000, 3500, 4800, 5500], // 연월별 소비 데이터 (임의 값)
  savings: [1200, 1800, 2400, 1400, 1920, 2200], // 연월별 저금 데이터 (임의 값)
}
export const GraphDetailPage = () => {
  return (
    <CenteredContainer>
      <Header>
        <HeaderContent>
          <HeaderTitle>자녀 소비 통계</HeaderTitle>
        </HeaderContent>
      </Header>

      <MainContent>
        <DateRangeContainer>
          <DateRangeTitle>기간별 소비 통계</DateRangeTitle>
          <DateRangeText>2023-01-01 ~ 2023-06-01</DateRangeText>
        </DateRangeContainer>

        {/* 카테고리 파이 차트 */}
        <CategoryPieChart data={categoryData} />

        <Table>
          <tbody>
            <TableRow>
              <TableHeader>항목 카테고리</TableHeader>
              <TableHeader>%(건수)</TableHeader>
            </TableRow>
            <TableRow>
              <TableCell>카테고리 1</TableCell>
              <TableCell>25%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>카테고리 2</TableCell>
              <TableCell>15%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>카테고리 3</TableCell>
              <TableCell>15%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>카테고리 4</TableCell>
              <TableCell>15%</TableCell>
            </TableRow>
          </tbody>
        </Table>
        
        <BarChart data={barChartData} />

        <Table>
          <thead>
            <TableRow>
              <TableHeader>연월</TableHeader>
              <TableHeader>소비 비율</TableHeader>
              <TableHeader>저금 비율</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.month}</TableCell>
                <TableCell>{item.expensePercentage}</TableCell>
                <TableCell>{item.savingsPercentage}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </MainContent>
    </CenteredContainer>
  )
}