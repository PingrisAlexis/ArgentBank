import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    LOADING,
    USER_PROFILE,
} from '../actions/types';

const initialState = {
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
            };
        }
        case USER_PROFILE: {
            return {
                ...state,
                user: payload.user,
            };
        }
        case LOADING: {
            return {
                ...state,
                isLoading: payload,
            };
        }
        case LOGOUT: {
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                token: null,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}
