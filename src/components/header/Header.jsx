import React from 'react';
import Logo from '../../assets/argentBankLogo.png';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/auth';
import {
    isLoadingSelector,
    isLoggedInSelector,
    userSelector,
} from '../../store/selectors/selectors';
import { LoaderSpinner } from '../index';

/**
 * @name Header
 * @description This is the header component.
 * @returns {JSX.Element}
 */

const Header = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(isLoggedInSelector);
    const isLoading = useSelector(isLoadingSelector);
    const user = useSelector(userSelector);

    const signOut = () => {
        dispatch(logout());
    };

    return (
        <header className={styles.header_container}>
            <nav className={styles.header_nav}>
                <Link to="/" className={styles.header_nav_logo}>
                    <img
                        className={styles.header_nav_logo_image}
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isLoading ? (
                    <LoaderSpinner />
                ) : isLoggedIn ? (
                    <div>
                        <Link to="/profile" className={styles.header_nav_item}>
                            <i className="fa fa-user-circle fa-lg" />
                            {user.firstName}
                        </Link>
                        <Link
                            to="/"
                            className={styles.header_nav_item}
                            onClick={signOut}
                        >
                            <i className="fa fa-sign-out fa-lg" />
                            Sign out
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/Login" className={styles.header_nav_item}>
                            <i className="fa fa-user-circle" />
                            Sign In
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
