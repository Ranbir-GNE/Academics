import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart, ArcElement, CategoryScale, LinearScale, BarElement} from 'chart.js'
Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(BarElement)


const ProgressChart = ({ courses }) => {
  // Extracting course names and attendance data
  const courseNames = courses?.map(course => course[0]);
  const attendanceData = courses?.map(course => parseInt(course[2], 10));

  // Chart.js data object
  const data = {
    labels: courseNames,
    datasets: [
      {
        label: 'Attendance',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        data: attendanceData,
      },
    ],
  };

  // Chart.js options object
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Progress Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProgressChart;
