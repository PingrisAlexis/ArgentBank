import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './SignInForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/actions/user';
import {
    errorSelector,
    isLoadingSelector,
    isLoggedInSelector,
} from '../../store/selectors/selectors';
import { LoaderSpinner } from '../index';

/**
 * @name SignInForm
 * @description This component will render the loader spinner.
 * @returns {JSX.Element}
 */

const SignInForm = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const isLoggedIn = useSelector(isLoggedInSelector);
    const isLoading = useSelector(isLoadingSelector);
    const hasError = useSelector(errorSelector);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password, remember));
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/profile');
        }
    }, [isLoggedIn, navigate]);

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.input_wrapper}>
                <label htmlFor="username">tony@stark.com</label>
                <label htmlFor="username">password123</label>
                <label htmlFor="username">Username</label>
                <input
                    onKeyPress={(event) =>
                        (event.charCode >= 65 && event.charCode <= 90) ||
                        (event.charCode >= 97 && event.charCode <= 122)
                    }
                    minLength={2}
                    disabled={isLoading}
                    type="email"
                    id="username"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor="password">Password</label>
                <input
                    minLength={8}
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.input_remember}>
                <input
                    type="checkbox"
                    id="remember-me"
                    onChange={(e) => setRemember(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className={styles.sign_in_button}>Sign In</button>
            {hasError ? (
                <p className={styles.error_submit}>
                    "Incorrect username or password"
                </p>
            ) : (
                ''
            )}
        </form>
    );
};

export default SignInForm;
