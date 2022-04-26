import {
    LOGIN_SUCCESS,
    LOGOUT,
    LOADING,
    USER_PROFILE,
    ERROR,
    // LOGIN_FAIL,
} from './types';
import { service } from '../../services/api';

/**
 * @name  loginUser
 * @param {string} username
 * @param {string} password
 * @param {boolean} remember
 * @returns {Object} Return an object with user informations and token
 */

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

        if (remember && token) {
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

        if (!token) {
            dispatch({
                type: ERROR,
                payload: true,
            });
        }
    } catch (error) {
        dispatch({
            type: LOGOUT,
        });
        dispatch({
            type: ERROR,
            payload: true,
        });
    }
};

/**
 * @name  editUser
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} token
 * @returns {Object} Return an object with update user informations
 */

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
            type: LOGOUT,
        });
    }
};

/**
 * @name  rememberUser
 * @param {string} token
 * @returns {Object} Return an object with user informations if remember is check
 */

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
            type: LOGOUT,
        });
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
