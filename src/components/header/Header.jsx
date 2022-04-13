import React from 'react'
import Logo from '../../assets/argentBankLogo.png'
import styles from './Header.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../store/actions/auth'

/**
 * @name Header
 * @description This is the header component.
 * @returns {JSX.Element}
 */

const Header = () => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const dispatch = useDispatch()
    let navigate = useNavigate()

    const logOut = () => {
        dispatch(logout())
        navigate('/')
    }

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
                {isLoggedIn ? (
                    <div>
                        <a className={styles.header_nav_item}>
                            <i className="fa fa-user-circle" />
                            Tony
                        </a>
                        <a className={styles.header_nav_item} onClick={logOut}>
                            <i className="fa fa-sign-out" />
                            Sign Out
                        </a>
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
    )
}

export default Header
