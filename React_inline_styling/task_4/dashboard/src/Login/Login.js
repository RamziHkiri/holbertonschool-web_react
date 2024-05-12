import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <div className={css(styles.appBody)}>
          <h1>Log in to continue</h1>
            <p>Login to access the full dashboard</p>
            <div className={css(styles.inputGroup)}>
                <label className={css(styles.label)}>email:</label>
                <input type="text" name="email" className={css(styles.input)} />
            </div>
            <div className={css(styles.inputGroup)}>
                <label className={css(styles.label)}>password:</label>
                <input type="text" name="password" className={css(styles.input)} />
            </div>
            <button className={css(styles.button)}>OK</button>
        </div>
    );
}

const styles = StyleSheet.create({
    appBody: {
        padding: '50px',
        height: '50vh',
    },
    inputGroup: {
        marginBottom: '10px',
    },
    label: {
        marginBottom: '5px',
    },
    input: {
      marginLeft: '10px',
        padding: '8px',
        border:'none'
    },
    button: {
        padding: '10px',
        
    },
    '@media (max-width: 900px)': {
        label: {
            marginBottom: '5px',
        },
        input: {
            marginBottom: '10px',
        },
        button: {
            display: 'block',
            width: '100%',
            marginBottom: '10px',
        },
    },
});

export default Login;
