import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const responce = await axios.post('/users/signup', credentials);
    token.set(responce.data.token);
    console.log(responce);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const responce = await axios.post('/users/login', credentials);
    token.set(responce.data.token);
    console.log('Log IN', responce);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    console.log('токена нет');
    return thunkAPI.rejectWithValue();
  }
  token.set(persistedToken);
  try {
    const responce = await axios.get('/users/current ');
    console.log(responce);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  refreshUser,
};

export default authOperations;
