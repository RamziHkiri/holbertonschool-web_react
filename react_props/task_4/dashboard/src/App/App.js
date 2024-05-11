import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App({ isLoggedIn=false }) {
  return (
    <>
      <div className="App">
        <Header />
        <div className="app-body">
        {isLoggedIn ? <CourseList /> : <Login />}
        </div>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default App;
