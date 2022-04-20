import React from 'react';
import {
    decodeToken,
    isTokenValid,
} from '../../utils/token-validity/TokenValidity';

export const tokenSelector = (state) => state.token;
export const userSelector = (state) => state.user;
export const isLoadingSelector = (state) => state.isLoading;
export const isLoggedInSelector = (state) => {
    if (state.token !== null && state.token !== undefined) {
        return isTokenValid(decodeToken(state.token));
    }
    return false;
};
