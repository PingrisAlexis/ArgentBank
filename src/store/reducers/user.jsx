import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOADING,
    USER_PROFILE,
} from '../actions/types';

const initialState = {
    error: null,
    token: null,
    user: null,
    isLoading: false,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                token: payload.token,
                error: null,
            };
        }
        case LOGIN_FAIL: {
            return {
                ...state,
                token: null,
                error: true,
            };
        }
        case USER_PROFILE: {
            return {
                ...state,
                user: payload.user,
            };
        }
        case LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
            };
        }
        case LOADING: {
            return {
                ...state,
                isLoading: payload,
            };
        }
        default:
            return state;
    }
}
