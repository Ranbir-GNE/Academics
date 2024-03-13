import React from 'react';
import downloadImage from '../assets/download.png'; // Import the image directly
import './Schedule.css'; // Import the CSS file

const Download = () => {
    return (
        <div className="container"> {/* New container */}
            <img src={downloadImage} className="image" /> {/* Image */}
            <a href="https://meet.google.com/vdv-dyvc-gaa?ijlm=1710332323514&adhoc=1&hs=187">Documents</a> {/* New hyperlink */}
        </div>
    ); // Add closing parenthesis here
};

export default Download;