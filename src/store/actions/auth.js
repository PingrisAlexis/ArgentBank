import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types'
import { service } from '../../services/api'

export const login = (username, password) => (dispatch) => {
    return service
        .userLogin(username, password)
        .then((token) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { token },
            })
        })
        .catch((error) => {
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
            console.log(message)
        })
}

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    })
}
