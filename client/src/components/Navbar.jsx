import React from "react";
// import { a } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <a href="https://edconnect-dashboard-blond.vercel.app/">
          <li>Dashboard</li>
        </a>

        <a href="https://event-calender-edconnect.vercel.app/">
          <li>Event Calender</li>
        </a>

        <a
          href="https://edconnect-meeting.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>Online Session </li>
        </a>
        <a href="https://chat-psi-jet.vercel.app/">
          <li>Chat-App</li>
        </a>
        <a href="https://ed-connect.vercel.app/student">
          <li>My Account</li>
        </a>

        {/* <a href="/examination">
          <li>Examinations</li>
        </a>

        <a href="/attendance">
          <li>Attendance</li>
        </a> */}

        <a href="https://ed-connect.vercel.app/settings">
          <li>Settings</li>
        </a>

        <a href="https://ed-connect.vercel.app/startpage">
          <li>Logout</li>
        </a>
        {/* Add more as as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
