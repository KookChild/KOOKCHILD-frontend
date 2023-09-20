import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

const BarChart = ({ data }) => {
  console.log("BarChart data", data)
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const createChart = (data) => {
      Chart.register(...registerables);
      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.labels, // 데이터의 레이블은 받아온 데이터의 레이블로 설정
          datasets: [
            {
              label: "소비비율",
              data: data.expenses, // 데이터의 비용은 받아온 데이터의 expenses로 설정
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
              ],
              borderWidth: 1,
            },
            {
              label: "저금비율", // 두 번째 데이터셋의 레이블
              data: data.savings, // 두 번째 데이터셋의 데이터는 받아온 데이터의 savings로 설정
              backgroundColor: [
                "rgba(54, 162, 235, 0.2)",
              ],
              borderColor: [
                "rgba(54, 162, 235, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: Math.max(
                ...data.expenses,
                ...data.savings // savings 데이터도 고려하여 최대값 설정
              ),
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };

    destroyChart(); // 기존 차트 파괴
    createChart(data); // 새로운 차트 생성

    return () => {
      destroyChart(); // 컴포넌트가 unmount될 때 차트 파괴
    };
  }, [data]); // data가 변경될 때마다 차트 업데이트

  return <canvas ref={chartRef} />;
};

export default BarChart;
