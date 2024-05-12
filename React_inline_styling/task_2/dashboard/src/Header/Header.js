import React from 'react';
import holberton from '../assets/holberton.jpg';
import { StyleSheet, css } from 'aphrodite';
import Notifications from '../Notifications/Notifications';

function Header() {

  return (
    <div className={css(styles.appHeader)} >
      <div>
        <img src={holberton} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.headerText)}>School dashboard</h1>
      </div>
      <Notifications displayDrawer = {true} listNotifications={[]}  />

    </div>
  )
}
const styles = StyleSheet.create({
  appHeader: {
    paddingLeft: '50px',
    display: 'flex',
    borderBottom: '3px solid #dc1010',
    alignContent: 'start',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: '\'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif',
    color: '#dc1010',
  },
  appLogo: {
    width: '100px',
    height: 'auto',
  },
});
export default Header;