import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profile } from '../../store/actions/user'

const ProfilePage = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.isLoggedIn)
    const token = useSelector((state) => state.token)
    console.log(token)

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(profile(token))
        }
    }, [])

    return <h1> connecté</h1>
}
export default ProfilePage
