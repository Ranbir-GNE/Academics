import React, { useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';

const CoursePieChart = ({ courses }) => {
  console.log(courses);
  const courseNames = courses?.map(course => course[0]);
  const attendanceData = courses?.map(course => course[1]);
  const courseMarks = courses?.map(course => course[2]);

  // Histogram chart data
  const data = {
    labels: courseNames,
    datasets: [
      {
        label: 'Computer Graphics',
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        data: attendanceData,
      },
      {
        label: 'Marks',
        backgroundColor: [
          'rgba(255, 0, 0, 0.6)', // Red color
          'rgba(0, 255, 0, 0.6)', // Green color
          'rgba(0, 0, 255, 0.6)', // Blue color
          // Add more colors here as needed
        ],
        hoverBackgroundColor: [
          'rgba(255, 0, 0, 1)', // Red color
          'rgba(0, 255, 0, 1)', // Green color
          'rgba(0, 0, 255, 1)', // Blue color
          // Add more colors here as needed
        ],
        data: courseMarks,
      },
    ],
  };

  return <Bar data={data} />;
};

export default CoursePieChart;
