import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: {
    labels: string[];
    values: number[];
    colors: string[];
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
        hoverBackgroundColor: data.colors,
      },
    ],
  };

  return (
    <div>
      <h3>Detailed Poll Results</h3>
      <p>Distribution of Answers</p>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
