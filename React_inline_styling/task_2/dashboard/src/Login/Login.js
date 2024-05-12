import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function Login() {
    return (
        <div className={css(styles.appBody)}>
            <p>Login to access the full dashboard</p>
            <label className={css(styles.appBodyChildren)}>email:</label>
            <input type="text" name="email" className={css(styles.appBodyChildren)} />
            <label className={css(styles.appBodyChildren)}>password:</label>
            <input className={css(styles.appBodyChildren)}type="text" name="password" />
            <button className= {css(styles.appBodyChildren)}>OK</button>
        </div>
    )
}
const styles = StyleSheet.create({
    appBody: {
      padding: '50px',
      height: '50vh',
    },
    appBodyChildren: {
      margin: '5px',
    },
  });
export default Login;