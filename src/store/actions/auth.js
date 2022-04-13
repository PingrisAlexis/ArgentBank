import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_PROFILE_SUCCESS,
    LOADING,
    REMEMBER,
} from './types'

import { service } from '../../services/api'

export const login = (username, password, remember) => async (dispatch) => {
    try {
        dispatch({
            type: LOADING,
            payload: true,
        })
        const token = await service.userLogin(username, password)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: { token },
        })

        if (remember) {
            localStorage.setItem('token', token)
        } else {
            localStorage.removeItem('token')
        }

        dispatch({
            type: LOADING,
            payload: false,
        })

        const user = await service.userProfile(token)
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: { user },
        })
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        dispatch({
            type: LOGIN_FAIL,
            payload: message,
        })
        dispatch({
            type: LOADING,
            payload: false,
        })
    }
}

export const remember = (token) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { token },
        })

        const user = await service.userProfile(token)

        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: { user },
        })
    } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
    }
}

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    })
}
