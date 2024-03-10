// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import CSS for styling

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/assignments">Assignments</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;
