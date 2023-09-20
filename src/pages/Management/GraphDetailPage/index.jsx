import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryPieChart from './CategoryPieChart'
import BarChart from './BarChart'
import { TopContainer } from '@components'
import { PRIMARY, YELLOW, DARK_GRAY, BROWN } from '@utility/COLORS'
import { TopNavigationBar } from '@components/TopNavigationBar'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
  DateRangePickerContainer,
  ShowButton,
  ShowButtonContainer,
  DatePickerContainer,
  FilterButton,
  FilterContainer,
  MainContent,
  Table,
  TableRow,
  TableHeader,
  TableCell,
} from './style' // 스타일 컴포넌트 임포트

import { getParentGraphData, getChildGraphData, getStatistics } from '@apis'
import { formattedDate } from '@utility/COMMON_FUNCTION'

// 카테고리 데이터 예시
const categoryData = [
  { title: '카테고리 1', value: 15, color: '#A9907E' },
  { title: '카테고리 2', value: 20, color: '#F3DEBA' },
  { title: '카테고리 3', value: 40, color: '#F8C4B4' },
  { title: '카테고리 4', value: 25, color: '#EAE0DA' },
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
  const [data, setData] = useState()
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
          <DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="시작일"
                  views={['month', 'year']}
                  value={startDate}
                  format="YYYY-MM"
                  onChange={e => setStartDate(formattedDate(e))}
                />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="종료일"
                  views={['month', 'year']}
                  value={endDate}
                  format="YYYY-MM"
                  onChange={e => setEndDate(formattedDate(e))}
                />
              </DemoContainer>
            </LocalizationProvider>
          </DatePickerContainer>
          <ShowButtonContainer>
            <ShowButton onClick={handleShowButtonClick}>보기</ShowButton>
          </ShowButtonContainer>
        </DateRangePickerContainer>
        <FilterContainer>
          <FilterButton onClick={() => setType(1)}>연도 단위</FilterButton>
          <FilterButton onClick={() => setType(2)}>연/월 단위</FilterButton>
        </FilterContainer>
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
