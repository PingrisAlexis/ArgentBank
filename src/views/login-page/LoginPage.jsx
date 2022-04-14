import React from 'react';
import styles from './LoginPage.module.scss';
import { SignInForm } from '../../components';
import '../../index.module.scss';

/**
 * @name LoginPage
 * @description This view will render the login page.
 * @returns {JSX.Element}
 */

const LoginPage = () => {
    return (
        <main className={styles.login_container}>
            <section className={styles.sign_in_content}>
                <i className={`${styles.sign_in_icon} fa fa-user-circle`} />
                <h1>Sign In</h1>
                <SignInForm />
            </section>
        </main>
    );
};

export default LoginPage;
