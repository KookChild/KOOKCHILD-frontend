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

import { getParentGraphData, getStatistics } from '@apis'
import { formattedDate } from '@utility/COMMON_FUNCTION'
const colors = ['#A9907E', '#F3DEBA', '#F8C4B4', '#EAE0DA', '#F8EDEB']

export const GraphDetailPage = () => {
  const [type, setType] = useState(1) // 1은 연월 단위, 2는 연도 단위 (수정)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const { childId } = useParams()

  // childId를 출력
  // console.log('childId:', childId)

  const [myData, setData] = useState()
  const [pieData, setPieData] = useState()
  const [stackData, setStackData] = useState()

  const formatDateRange = (start, end) => {
    // 'YYYY-MM' 형식으로 변경
    const formattedStart = start.substring(0, 7)
    const formattedEnd = end.substring(0, 7)

    return `${formattedStart}~${formattedEnd}`
  }

  const convertedPieData = transformData(pieData)
  // console.log('CONVERTED PIE DATA')
  // console.log(convertedPieData)

  // 사용 예제
  const transformedBarData = transformBarChartData(stackData)

  function transformData(inputData) {
    const transformedPieData = []
    var idx = 0
    // Loop through the input data and transform it
    for (const key in inputData) {
      if (inputData.hasOwnProperty(key)) {
        const item = inputData[key]
        const title = item.CATEGORY
        const value = parseFloat(item.PERCENTAGE) // Parse percentage as a float
        const color = colors[key % colors.length] // Generate a color based on index

        // Add the transformed item to the array
        transformedPieData.push({
          title,
          value,
          color,
        })
      }
    }

    return transformedPieData
  }

  // Function to generate a random color (you can customize this)

  function transformBarChartData(inputData) {
    const dataMap = {} // 날짜별 데이터를 저장할 객체

    // Loop through the input data and transform it
    for (const key in inputData) {
      if (inputData.hasOwnProperty(key)) {
        const item = inputData[key]
        const yearMonth = item.YEAR
        const isDeposit = item.IS_DEPOSIT === '예금' // 예금 여부를 확인
        const percentage = parseFloat(item.PERCENTAGE) // Parse percentage as a float

        // 이미 해당 날짜에 대한 데이터가 있는지 확인
        if (dataMap.hasOwnProperty(yearMonth)) {
          // 이미 해당 날짜에 대한 데이터가 있으면 예금 또는 소비 값을 더함
          if (isDeposit) {
            dataMap[yearMonth].savings += percentage
          } else {
            dataMap[yearMonth].expenses += percentage
          }
        } else {
          // 해당 날짜에 대한 데이터가 없으면 새로운 객체를 생성하고 예금 또는 소비 값을 설정
          const newData = {
            yearMonth,
            expenses: isDeposit ? 0 : percentage, // 예금이면 0, 소비이면 percentage 값 설정
            savings: isDeposit ? percentage : 0, // 예금이면 percentage 값, 소비이면 0 설정
          }
          dataMap[yearMonth] = newData
        }
      }
    }

    // dataMap 객체를 배열로 변환
    const dataArray = Object.values(dataMap)

    const labels = dataArray.map(item => item.yearMonth)
    const expenses = dataArray.map(item => item.expenses)
    const savings = dataArray.map(item => item.savings)

    return {
      labels,
      expenses,
      savings,
    }
  }

  // Call the function with your input data

  // "보기" 버튼 클릭 시 그래프와 차트를 표시할지 여부를 결정하는 상태 변수
  const [showGraph, setShowGraph] = useState(false)
  // "보기" 버튼 클릭 시 호출되는 함수
  const handleShowButtonClick = () => {
    // 입력 필드 중 하나라도 비어있으면 알림 표시하고 그래프 표시하지 않음
    if (!startDate || !endDate) {
      setShowGraph(false) // 그래프 표시 여부를 false로 설정
      return // 함수 종료
    }

    getParentGraphData(childId, formatDateRange(startDate, endDate), type).then(
      data => {
        const reversedPieData = Object.keys(data.PIE)
          .reverse() // 키 배열을 역순으로 변경
          .map(key => data.PIE[key]);
    
        setPieData(reversedPieData); // 역순으로 된 데이터로 설정
        setStackData(data.STACK);
      },
    )
    

    // getStatistics(childId, formatDateRange(startDate, endDate)).then(
    //   data => {
    //     console.log("MYDATA")
    //     console.log(data.MY_DATA)
    //     setData(data.MY_DATA)
    //   },
    // )
    setShowGraph(true) // 그래프 표시 여부를 true로 설정
  }

  // useEffect(() => {
  // getParentGraphData(childId, formatDateRange('2023-09', '2023-09'), 1).then(
  //   data => {
  //     const reversedPieData = Object.keys(data.PIE)
  //       .reverse() // 키 배열을 역순으로 변경
  //       .map(key => data.PIE[key]);
  
  //     setPieData(reversedPieData); // 역순으로 된 데이터로 설정
  //     setStackData(data.STACK);
  //   },
  // )
  // }, [])
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
        
        {/* 그래프와 차트 표시 여부에 따라 조건부 렌더링 */}
        { showGraph && (
          <>
            {/* 카테고리 파이 차트 */}
            <CategoryPieChart data={convertedPieData} />
            <Table>
              <tbody>
                <TableRow>
                  <TableHeader>카테고리</TableHeader>
                  <TableHeader>상세 비율(건수)</TableHeader>
                  <TableHeader>상위 비율</TableHeader>
                </TableRow>
                
                {pieData?.map((item, index) => (
                  // console.log(item),
                  <TableRow key={index}>
                    <TableCell>{item.CATEGORY}</TableCell>
                    <TableCell>{`${item.PERCENTAGE}% (${item.COUNT}건)`}</TableCell>
                    {/* <TableCell>{myData[item.CATEGORY]}</TableCell> */}
                    <TableCell>{item.RATIO}%</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
            <br></br>
            <FilterContainer>
          <FilterButton
            onClick={() => {
              setType(1)
              handleShowButtonClick()
            }}
          >
            연도 단위
          </FilterButton>
          <FilterButton
            onClick={() => {
              setType(2)
              handleShowButtonClick()
            }}
          >
            연/월 단위
          </FilterButton>
        </FilterContainer>
        <br></br>
            <BarChart data={transformedBarData} />
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>연월</TableHeader>
                  <TableHeader>소비</TableHeader>
                  <TableHeader>저금</TableHeader>
                </TableRow>
              </thead>

              <tbody>
                {transformedBarData.labels.map((label, index) => (
                  <TableRow key={index}>
                    <TableCell>{label}</TableCell>
                    <TableCell>
                      {transformedBarData.expenses[index].toLocaleString()}%
                    </TableCell>
                    <TableCell>
                      {transformedBarData.savings[index].toLocaleString()}%
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </MainContent>
    </TopContainer>
  )
}
