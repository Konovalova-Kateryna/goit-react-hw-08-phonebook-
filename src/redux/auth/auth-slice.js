const { createSlice } = require('@reduxjs/toolkit');
const { default: authOperations } = require('./auth-operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [authOperations.refreshUser.pending](state, action) {
      state.isLoggedIn = false;
      state.isRefreshing = true;
    },
    [authOperations.refreshUser.rejected](state, action) {
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
