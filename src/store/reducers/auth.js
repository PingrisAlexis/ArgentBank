import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_PROFILE_SUCCESS,
    LOADING,
    REMEMBER,
} from '../actions/types'

const initialState = {
    isLoggedIn: false,
    error: null,
    token: '',
    user: {},
    isLoading: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
                error: null,
            }
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                error: payload,
            }
        }
        case GET_PROFILE_SUCCESS: {
            return {
                ...state,
                user: payload.user,
            }
        }
        case LOGOUT: {
            localStorage.removeItem('token')
            return {
                ...state,
                user: {},
                token: '',
                isLoggedIn: false,
            }
        }
        case REMEMBER: {
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isLoggedIn: true,
            }
        }
        case LOADING: {
            return {
                ...state,
                isLoading: payload,
            }
        }
        default:
            return state
    }
}
