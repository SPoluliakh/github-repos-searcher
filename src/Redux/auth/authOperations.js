import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'https://github-repo-searcher-nodejs.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3001/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error) {
        throw new Error();
      }
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.token);
      return data.data;
    } catch (error) {
      if (error) {
        toast.error('Name or email error');
        throw new Error();
      }
      toast.error('Name or email error');
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');

      return data.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
