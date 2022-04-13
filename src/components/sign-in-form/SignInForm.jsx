import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './SignInForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../store/actions/auth'

const SignInForm = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const error = useSelector((state) => state.error)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/profile')
        }
    }, [isLoggedIn])

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.input_wrapper}>
                <label htmlFor="username">tony@stark.com</label>
                <label htmlFor="username">password123</label>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className={styles.input_remember}>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className={styles.sign_in_button}>Sign In</button>
            {error && <div>ERREUR: {error}</div>}
        </form>
    )
}

export default SignInForm
