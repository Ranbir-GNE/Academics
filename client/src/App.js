import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './pages/Home'; 
import CoursePage from './pages/CoursePage'; 
import AssignmentPage from './pages/AssignmentPage'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render Navbar component */}
        <div className="content">
          <Routes> {/* Wrap routes in a Routes component */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="/assignments" element={<AssignmentPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
