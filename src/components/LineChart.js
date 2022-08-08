import React from "react";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineChart = ({ xAxisLabels, difficulties }) => {
  const chartData = {
    labels: xAxisLabels,
    datasets: [
      {
        data: difficulties,
        fill: true,
        lineTension: 0,
        backgroundColor: "cyan",
        pointBorderColor: "",
        pointBackgroundColor: "clear",
        pointBorderWidth: 0.1,
        hoverBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: "",
        pointRadius: 0,
        tension: 0.4,
        spanGaps: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: "#FAFAFA",
      borderColor: "blue",
      borderWidth: 1,
      titleFontColor: "black",
      titleFontStyle: "normal",
      displayColors: true,
      bodyFontColor: "black",
    },
    plugins: { legend: false },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
          font: {
            size: 30,
          },
        },
        ticks: {
          font: {
            size: 20,
          },
          maxTicksLimit: 5,
        },
        grid: {
          display: true,
          color: "gray",
        },
      },

      y: {
        title: {
          display: true,
          text: "Difficulty",
          font: {
            size: 30,
          },
        },
        ticks: {
          font: {
            size: 20,
          },
        },
        beginAtZero: true,
        max: 5,
        grid: {
          display: true,
          color: "gray",
        },
      },
    },
  };

  return (
    <div className="linechart">
      <Line className="chartjs-line" data={chartData} options={options}></Line>
    </div>
  );
};

export default LineChart;
