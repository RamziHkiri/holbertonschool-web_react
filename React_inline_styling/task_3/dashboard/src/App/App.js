import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import { StyleSheet, css } from 'aphrodite';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { logOut } = this.props;
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    return (
      <>
        <div className={css(styles.app)}>
          <Header />
          <div className={css(styles.appBody)}>
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: '20px'
  },
  appBody: {
    padding: '50px',
    height: '50vh'
  },
  
});

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

App.defaultProps = {
  logOut: () => {}
};

export default App;