import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.goit.global';

export const api = axios.create({
  baseURL: 'https://connections-api.goit.global',
});

const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};

// Utility to add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const res = await api.post('/users/signup', body);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const res = await api.post('/users/login', body);
    // After successful login, add the token to the HTTP header
    setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()

    // const persistedToken = state.auth.token;

    try {
      const savedToken = thunkAPI.getState().auth.token;
      console.log(savedToken);
      if (savedToken === null) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Token is not exist! ');
      }
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(savedToken);
      const res = await api.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
