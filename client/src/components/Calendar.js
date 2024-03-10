// Calendar.js

import React from 'react';
import './Calendar.css';

const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  
  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Get the first day of the month
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  // Generate an array of days in the month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Generate an array of empty cells for days before the first day of the month
  const emptyCells = Array.from({ length: firstDayOfMonth }, () => null);
  
  // Combine the empty cells and days array to create the calendar grid
  const calendarGrid = [...emptyCells, ...daysArray];
  
  return (
    <div className="calendar">
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {calendarGrid.map((day, index) => (
            index % 7 === 0 ? // Start a new row every 7 days
              <tr key={index}>
                {calendarGrid.slice(index, index + 7).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            : null
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
