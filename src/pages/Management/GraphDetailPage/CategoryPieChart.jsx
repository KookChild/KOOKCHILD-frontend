import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const CategoryPieChart = ({ data }) => {
  return (
    <PieChart
    data={data.map((item) => ({
      ...item,
      title: item.title, // Add title as a label
      label: `${item.title}`, // Customize the label to include title
    }))}
    animate
    animationDuration={500}
    animationEasing="ease-out"
    startAngle={-90}
    totalValue={100}
    lineWidth={50}
    label={({ dataEntry }) => dataEntry.label} // Use the customized label
    labelStyle={(index) => ({
      fill: data[index].color,
      fontSize: '6px', // Adjust label text size as needed
      fontFamily: 'sans-serif',
      fontWeight: 'bold', // Add fontWeight for better visibility
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
