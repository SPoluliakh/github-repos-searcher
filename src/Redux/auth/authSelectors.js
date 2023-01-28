import { createDraftSafeSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const getUser = state => state.auth;

export const selectUser = createDraftSafeSelector(getUser, state => state.user);

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;
