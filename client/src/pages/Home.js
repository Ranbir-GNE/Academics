import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProgressChart from '../components/ProgressChart';
import Calendar from '../components/Calendar';
import Schedule from '../components/Schedule';
import AttendanceHistogram from '../components/AttendanceHistogram';
import CoursePieChart from '../components/CoursePieChart';
import Download from '../components/Download';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faVideo, faBullhorn } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const url = 'https://edconnect-dashboard-backend.vercel.app/api/user/65ec332f92ffe03ab5dcfdf0';
        console.log('Fetching user data from:', url);
        const response = await axios.get(url);
        setUserData(response.data);
        setAttendanceData(response.data.Courses);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="welcome-container">
          <div className="welcome-box">
            <h2>Welcome to College Dashboard</h2>
          </div>
        </div>
        <div className="calendar-container">
          <Calendar />
        </div>
        <div className="picture-container">
          <Schedule />
        </div>
        <div className="picture-container">
          <Download />
        </div>
        <div className="schedule-container">
          <div className="schedule-box">
            <div className="schedule-item">
              <h4>
                <FontAwesomeIcon icon={faBullhorn} /> Quick updates from teacher
              </h4>
              <p>Quick updates from teacher</p>
            </div>
            <div className="schedule-item">
              <h4>
                <FontAwesomeIcon icon={faVideo} /> Online Lecture Link
              </h4>
              <a href="https://edconnect-meeting.vercel.app/"> Lecture Link</a>
            </div>
            <div className="schedule-item">
              <h4>
                <FontAwesomeIcon icon={faBell} /> Notifications
              </h4>
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
            <h3>Assignments</h3>
            <p>Assignment details here...</p>
          </Link>
        </div>
        <div className="box">
          <h3>Attendance</h3>
          <AttendanceHistogram data={attendanceData} />
        </div>
        <div className="box">
          <h3>Progress Chart</h3>
          <ProgressChart courses={attendanceData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
