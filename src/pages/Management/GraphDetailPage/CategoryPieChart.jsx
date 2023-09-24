import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

const CategoryPieChart = ({ data }) => {
  return (
    <PieChart
      data={data}
      animate
      animationDuration={1000}
      animationEasing="ease-out"
      startAngle={-90}
      totalValue={100}
      lineWidth={50} // 더 굵은 그래프를 원하면 이 값을 증가하세요
      label={({ dataEntry }) => `${dataEntry.title}`}
      labelStyle={index => ({
        fontSize: '6px', // 라벨 텍스트 크기를 조정하세요
      })}
      style={{
        width: '100%',
        height: '300px', // 필요한대로 높이를 조정하세요
      }}
      radius={35}
      labelPosition={112}
    />
  )
}

export default CategoryPieChart
