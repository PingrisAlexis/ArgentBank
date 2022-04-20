import React from 'react';
import styles from './LoginPage.module.scss';
import { LoaderSpinner, SignInForm } from '../../components';
import '../../index.module.scss';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '../../store/selectors/selectors';

/**
 * @name LoginPage
 * @description This view will render the login page.
 * @returns {JSX.Element}
 */

const LoginPage = () => {
    const isLoading = useSelector(isLoadingSelector);

    return isLoading ? (
        <LoaderSpinner />
    ) : (
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
