import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>

        <Link to="/admin">
          <li>Admin</li>
        </Link>

        <Link to="/student">
          <li>Student</li>
        </Link>

        <Link to="/academics">
          <li>Academics</li>
        </Link>

        <Link to="/fees">
          <li>Fees Collection</li>
        </Link>

        <Link to="/examination">
          <li>Examinations</li>
        </Link>

        <Link to="/attendance">
          <li>Attendance</li>
        </Link>

        <a href="https://curacare.vercel.app/" target="_blank" rel="noopener noreferrer">
          <li>Communicate</li>
        </a>

        <Link to="/my-account">
          <li>My Account</li>
        </Link>

        <Link to="/settings">
          <li>Settings</li>
        </Link>

        <Link to="/change-password">
          <li>Change Password</li>
        </Link>

        <Link to="/logout">
          <li>Logout</li>
        </Link>
        {/* Add more links as needed */}
      </ul>
    </nav >
  );
}

export default Navbar;
