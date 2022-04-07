import React from 'react';
import Logo from '../../assets/argentBankLogo.png';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';
/**
 * @name Header
 * @description This is the header component.
 * @returns {JSX.Element}
 */

const Header = () => {
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
                    <div>
                        <Link to="/Login" className={styles.header_nav_item}>
                            <i className="fa fa-user-circle"/>
                            Sign In
                        </Link>
                    </div>
                    {/*<div>*/}
                    {/*    <a className={styles.header_nav_item} href="./user.html">*/}
                    {/*        <i className="fa fa-user-circle" />*/}
                    {/*        Tony*/}
                    {/*    </a>*/}
                    {/*    <a className={styles.header_nav_item} href="./index.html">*/}
                    {/*        <i className="fa fa-sign-out" />*/}
                    {/*        Sign Out*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </nav>
        </header>
    )
}

export default Header;
