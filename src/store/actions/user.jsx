import {
    LOGIN_SUCCESS,
    LOGOUT,
    LOADING,
    USER_PROFILE,
    LOGIN_FAIL,
} from './types';

import { service } from '../../services/api';

export const loginUser = (username, password, remember) => async (dispatch) => {
    try {
        dispatch({
            type: LOADING,
            payload: true,
        });

        const token = await service.userLogin(username, password);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: { token },
        });

        if (remember) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }

        const user = await service.userProfile(token);

        dispatch({
            type: LOADING,
            payload: false,
        });

        dispatch({
            type: USER_PROFILE,
            payload: { user },
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const editUser = (firstName, lastName, token) => async (dispatch) => {
    try {
        dispatch({
            type: LOADING,
            payload: true,
        });

        const user = await service.userEdit(firstName, lastName, token);

        dispatch({
            type: USER_PROFILE,
            payload: { user },
        });

        dispatch({
            type: LOADING,
            payload: false,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const rememberUser = (token) => async (dispatch) => {
    try {
        if (token) {
            dispatch({
                type: LOADING,
                payload: true,
            });

            dispatch({
                type: LOGIN_SUCCESS,
                payload: { token },
            });

            const user = await service.userProfile(token);

            dispatch({
                type: LOADING,
                payload: false,
            });

            dispatch({
                type: USER_PROFILE,
                payload: { user },
            });
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
        });
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
