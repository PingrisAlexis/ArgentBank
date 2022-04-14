import React from 'react';

export const tokenSelector = (state) => state.token;
export const userSelector = (state) => state.user;
export const errorSelector = (state) => state.error;
export const isLoggedInSelector = (state) => state.isLoggedIn;
export const isLoadingSelector = (state) => state.loading;
