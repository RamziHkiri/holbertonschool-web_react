import React from 'react';
import holberton from '../assets/holberton.jpg';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';

function Header() {

  return (
    <div className={css(styles.appHeader)} >
      <div className={css(styles.navBar)}>
        <img src={holberton} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.headerText)}>School dashboard</h1>
      </div>
      <Notifications displayDrawer = {false} listNotifications={[]}  />

    </div>
  )
}
const styles = StyleSheet.create({
  appHeader: {
    paddingLeft: '50px',
    borderBottom: '3px solid #dc1010',
    alignContent: 'start',
  },
  headerText: {
    fontFamily: '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif',
    color: '#dc1010',
  },
  appLogo: {
    width: '200px',
    height: 'auto',
  },
  '@media (max-width: 900px)': {
    navBar: {
      display: 'flex',
      flexDirection: 'row',
    }
  }

});
export default Header;