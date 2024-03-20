import React from 'react';
import downloadImage from '../assets/image6.png'; // Import the image directly
import './Schedule.css'; // Import the CSS file

const Download = () => {
    return (
        <div className="container"> {/* New container */}
            <img src={downloadImage} className="image" /> {/* Image */}
            <a href="https://edconnect-documents.vercel.app/"><button>Documents</button></a> {/* New hyperlink */}
        </div>
    ); // Add closing parenthesis here
};

export default Download;