import React from 'react';
import scheduleImage from '../assets/schedule.png'; // Import the image directly
import './Schedule.css'; // Import the CSS file

const Schedule = () => {
    return (
        <div className="container"> {/* New container */}
            <img src={scheduleImage} alt="Picture" className="image" /> {/* Image */}
            <a href="https://meet.google.com/vdv-dyvc-gaa?ijlm=1710332323514&adhoc=1&hs=187">Time-Table</a> {/* New hyperlink */}
        </div>
    ); // Add closing parenthesis here
};

export default Schedule;