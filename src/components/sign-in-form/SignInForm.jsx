import React from 'react';
import {useState} from 'react';
import styles from './SignInForm.module.scss';

const SignInForm = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <form>
            <div className={styles.input_wrapper}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className={styles.input_remember}>
                <input type="checkbox" id="remember-me"/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className={styles.sign_in_button}>Sign In</button>
        </form>
    )
}

export default SignInForm;