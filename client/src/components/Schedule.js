import React from 'react';
import scheduleImage from '../assets/schedule.png'; // Import the image directly
import './Schedule.css'; // Import the CSS file

const Schedule = () => {
    return (
        <div className="container"> {/* New container */}
            <img src={scheduleImage} alt="Picture" className="image" /> {/* Image */}
            <a href="https://time-table-c8ro.vercel.app/"><button>Time-Table</button></a> {/* New hyperlink */}
        </div>
    ); // Add closing parenthesis here
};

export default Schedule;