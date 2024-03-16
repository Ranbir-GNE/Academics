import React from 'react';
import downloadImage from '../assets/download.png'; // Import the image directly
import './Schedule.css'; // Import the CSS file

const Download = () => {
    return (
        <div className="container"> {/* New container */}
            <img src={downloadImage} className="image" /> {/* Image */}
            <a href="https://documents-bice.vercel.app/"><button>Documents</button></a> {/* New hyperlink */}
        </div>
    ); // Add closing parenthesis here
};

export default Download;