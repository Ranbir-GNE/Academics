// AttendanceHistogram.js

import React from 'react';

const AttendanceHistogram = ({ courses }) => {
  // Check if courses array is empty or undefined
  if (!courses || courses.length === 0) {
    return (
      <div className="attendance-histogram">
        <p>No attendance data available</p>
      </div>
    );
  }

  return (
    <div className="attendance-histogram">
      {courses.map((course, index) => (
        <div key={index} className="histogram-item">
          <h3>{course.name}</h3>
          <div className="histogram-bar" style={{ width: `${course.attendance}%` }}>
            {course.attendance}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendanceHistogram;
