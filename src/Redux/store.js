import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { gitApi } from './gitApiOperations/gitOperations';
import { reposApi } from './reposOperations/reposOperations';
import { authSlice } from './auth/authReducer';

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  gitApi.middleware,
  reposApi.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    [gitApi.reducerPath]: gitApi.reducer,
    [reposApi.reducerPath]: reposApi.reducer,
  },
  middleware,
});

export const persistor = persistStore(store);
