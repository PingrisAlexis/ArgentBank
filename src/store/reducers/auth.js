import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_PROFILE_SUCCESS,
} from '../actions/types'

const initialState = {
    isLoggedIn: false,
    error: null,
    token: {},
    user: {},
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: payload.token,
                error: null,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                error: payload,
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                user: null,
            }
        case GET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user,
            }
        default:
            return state
    }
}
