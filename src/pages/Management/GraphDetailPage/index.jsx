import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import CategoryPieChart from './CategoryPieChart' // 카테고리 파이 차트 컴포넌트 추가
import BarChart from './BarChart' // 막대 그래프 컴포넌트 추가
import { TopContainer } from '@components'
import { PRIMARY, YELLOW, DARK_GRAY, BROWN } from '@utility/COLORS'
import { TopNavigationBar } from '../../../components/TopNavigationBar'
import {
  DateRangePickerContainer,
  DateSelection,
  DatePicker,
  DateSeparator,
  DateRangeDisplay,
} from './style' // 스타일 컴포넌트 임포트
import { getParentGraphData, getChildGraphData, getStatistics } from '@apis'

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
  padding: 10px;
  font-size: 14px; /* 텍스트의 글꼴 크기를 조절 */
  width: auto; /* 셀 너비를 내용에 따라 자동으로 조절 */
`

// 카테고리 데이터 예시
const categoryData = [
  { title: '카테고리 1', value: 15, color: PRIMARY },
  { title: '카테고리 2', value: 20, color: BROWN },
  { title: '카테고리 3', value: 40, color: YELLOW },
  { title: '카테고리 4', value: 25, color: DARK_GRAY },
]
// 막대 그래프 데이터 예시
const barChartData = {
  labels: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06'],
  expenses: [3000, 4500, 6000, 3500, 4800, 5500], // 연월별 소비 데이터 (임의 값)
  savings: [1200, 1800, 2400, 1400, 1920, 2200], // 연월별 저금 데이터 (임의 값)
}
const getParentGraphDataRet = {
  PIE: {
    0: {
      CATEGORY: '기타',
      COUNT: 12,
      PERCENTAGE: '25.43',
    },
    1: {
      CATEGORY: '문화',
      COUNT: 8,
      PERCENTAGE: '16.09',
    },
    2: {
      CATEGORY: '식품',
      COUNT: 11,
      PERCENTAGE: '23.14',
    },
    3: {
      CATEGORY: '의류',
      COUNT: 7,
      PERCENTAGE: '17.62',
    },
    4: {
      CATEGORY: '카페',
      COUNT: 10,
      PERCENTAGE: '17.73',
    },
  },
  STACK: {
    0: {
      IS_DEPOSIT: '소비',
      YEAR: 2022,
      PERCENTAGE: '44.35',
    },
    1: {
      IS_DEPOSIT: '예금',
      YEAR: 2022,
      PERCENTAGE: '8.87',
    },
    2: {
      IS_DEPOSIT: '소비',
      YEAR: 2023,
      PERCENTAGE: '33.93',
    },
    3: {
      IS_DEPOSIT: '예금',
      YEAR: 2023,
      PERCENTAGE: '12.85',
    },
  },
}
const myData = {
  MY_DATA: {
    문화: 77.03,
    카페: 54.37,
    기타: 51.26,
  },
  AGE: 11,
}

export const GraphDetailPage = () => {
const [data,setData] = useState()
const [pieData, setPieData] = useState()
const [stackData, setStackData] = useState()
  useEffect(() => {

   getParentGraphData(4, '2022-09-23~2023-04-07', 2).then(data => {
    // console.log(data.PIE)
    setData(data)
    
    setPieData(Object.keys(data.PIE).map(key => data.PIE[key]))
    // console.log(typeof(data.PIE))
    setStackData(data.STACK)
    })
  }, [])
  const [type, setType] = useState(1) // 1은 연월 단위, 2는 연도 단위 (수정)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const { childId } = useParams()

  // childId를 출력
  console.log('childId:', childId)

  const formatDateRange = (start, end) => {
    return `${start}~${end}`
  }

  // "보기" 버튼 클릭 시 그래프와 차트를 표시할지 여부를 결정하는 상태 변수
  const [showGraph, setShowGraph] = useState(false)
  // "보기" 버튼 클릭 시 호출되는 함수
  const handleShowButtonClick = () => {
    // 입력 필드 중 하나라도 비어있으면 알림 표시하고 그래프 표시하지 않음
    if (!startDate || !endDate) {
      setShowGraph(false) // 그래프 표시 여부를 false로 설정
      return // 함수 종료
    }

    // 연도 단위와 연월 단위 선택에 따라 그래프와 차트를 표시
    if ((type === 1 || type === 2) && startDate && endDate) {
      setShowGraph(true)
    } else {
      setShowGraph(false)
    }
  }

  return (
    <TopContainer>
      <TopNavigationBar title={'자녀소비통계'} />

      <MainContent>
        <DateRangePickerContainer>
          <div className="radio-group">
            <div className="radio-group-title">출력 기준:</div>
            <label>
              <input
                type="radio"
                value="1" // 연도 단위: 1 (수정)
                checked={type === 1}
                onChange={() => setType(1)}
              />
              연도 단위
            </label>
            <label>
              <input
                type="radio"
                value="2" // 연월 단위: 2 (수정)
                checked={type === 2}
                onChange={() => setType(2)}
              />
              연/월 단위
            </label>
          </div>

          <div className="date-input-container">
            <div className="date-group-title">기간:</div>
            {/* 시작 날짜 입력 */}
            <input
              type="date"
              placeholder="시작 날짜"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              required // 날짜 선택 강제화
            />
            <DateSeparator>~</DateSeparator>
            {/* 종료 날짜 입력 */}
            <input
              type="date"
              placeholder="종료 날짜"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              required // 날짜 선택 강제화
            />
            {/* 날짜 입력이 비어있을 때 메시지 표시 */}
            {!startDate || !endDate ? (
              <div className="error-message">날짜를 입력하세요</div>
            ) : null}
          </div>
          {/* "보기" 버튼 */}
          <button onClick={handleShowButtonClick}>보기</button>
        </DateRangePickerContainer>

        {/* 그래프와 차트 표시 여부에 따라 조건부 렌더링 */}
        {/* {showGraph && ( */}
        <>
          {/* 카테고리 파이 차트 */}
          <CategoryPieChart data={categoryData} />

          <Table>
            <tbody>
              <TableRow>
                <TableHeader>카테고리</TableHeader>
                <TableHeader>비율(%)</TableHeader>
              </TableRow>

               {pieData?.map((item, index) => (
                console.log(item),
                <TableRow key={index}>
                  <TableCell>{item.CATEGORY}</TableCell>
                  <TableCell>{`${item.PERCENTAGE} (${item.COUNT})`}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

          <BarChart data={barChartData} />

          <Table>
            <thead>
              <TableRow>
                <TableHeader>연월</TableHeader>
                <TableHeader>소비</TableHeader>
                <TableHeader>저금</TableHeader>
              </TableRow>
            </thead>

            <tbody>
              {barChartData.labels.map((label, index) => (
                <TableRow key={index}>
                  <TableCell>{label}</TableCell>
                  <TableCell>
                    {barChartData.expenses[index].toLocaleString()}원
                  </TableCell>
                  <TableCell>
                    {barChartData.savings[index].toLocaleString()}원
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
        {/* )} */}
      </MainContent>
    </TopContainer>
  )
}
