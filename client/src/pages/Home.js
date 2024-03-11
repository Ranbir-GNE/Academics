// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProgressChart from '../components/ProgressChart';
import Calendar from '../components/Calendar';
import AttendanceHistogram from '../components/AttendanceHistogram';
import CoursePieChart from '../components/CoursePieChart';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [userData, setUserData] = useState(null);

  const [attendanceData, setAttendenceData] = useState()
  // const [gradesData, setGradesData] = useState()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = 'http://localhost:5012/api/user/65ec332f92ffe03ab5dcfdf0';
        console.log('Fetching user data from:', url);
        const response = await axios.get(url).then(
          (response)=>{
            setUserData(response.data);
            setAttendenceData(response.data.Courses)
          }
        )
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    

    fetchUserData(); // Call the function to fetch user data
  }, []);

  // Dummy data for grades hisGradesram


  return (
    <div className="home-container">
      <div className="content-container">
        <div className="welcome-container">
          <div className="welcome-box">
            <h2>Welcome to College Dashboard</h2>
            <p>This is the home page of our college dashboard.</p>
          </div>
        </div>
        <div className="calendar-container">
          <Calendar />
        </div>
        <div className="schedule-container">
          <div className="schedule-box">
            <h3>Today's Schedule</h3>
            <div className="schedule-item">
              <h4>Class Activity Field</h4>
              <p>Quick updates from teacher</p>
            </div>
            <div className="schedule-item">
              <h4>Online Lecture Link</h4>
              <p>Link to the online lecture</p>
            </div>
            <div className="schedule-item">
              <h4>Notifications</h4>
              <p>Notifications from teacher or chatting app</p>
            </div>
          </div>
        </div>
      </div>
      <div className="boxes-container">
        <div className="box">
          <Link to="/courses">
            <h3>Course Pie Chart</h3>
            <CoursePieChart courses={attendanceData} />
          </Link>
        </div>
        <div className="box">
          <Link to="/assignments">
            <h3>Due Assignments</h3>
            <p>Due assignment details here...</p>
          </Link>
        </div>
        <div className="box">
          <h3>Attendance</h3>
          <AttendanceHistogram data={attendanceData} />
        </div>
        <div className="box">
          <h3>Progress Chart</h3>
          <ProgressChart  courses={attendanceData}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
