import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const CategoryPieChart = ({ data }) => {
  return (
    <PieChart
      data={data}
      animate
      animationDuration={500}
      animationEasing="ease-out"
      startAngle={-90}
      totalValue={100}
      lineWidth={50} // 더 굵은 그래프를 원하면 이 값을 증가하세요
      label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
      labelStyle={(index) => ({
        fill: data[index].color,
        fontSize: '6px', // 라벨 텍스트 크기를 조정하세요
        fontFamily: 'sans-serif',
      })}
      style={{
        width: '100%',
        height: '300px', // 필요한대로 높이를 조정하세요
        backgroundColor: '#ffffff', // 원하는 배경색을 추가하세요
      }}
      radius={40}
      labelPosition={112}
    />
  );
};

export default CategoryPieChart;
