import { createSlice } from '@reduxjs/toolkit';
import { authApiSlice } from '../api/auth';
import { TokenManager } from '../utils/tokenManager';

interface UserState {
  user: {
    name: string;
    email: string;
  } | null;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: 'userSliceReducer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {

    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        TokenManager.setRefreshToken(action.payload.refreshToken);
        TokenManager.setAccessToken(action.payload.accessToken);
      }
    )
    .addMatcher(
      authApiSlice.endpoints.login.matchRejected,
      (state, action) => {
        state.error = action.error.message || null;
        state.user = null;
        TokenManager.deleteAccessToken();
        TokenManager.deleteRefreshToken();
      }
    )
    .addMatcher(
      authApiSlice.endpoints.register.matchFulfilled,
      (state, action) => {
        state.error = null;
        state.user = action.payload.user;
        TokenManager.setRefreshToken(action.payload.refreshToken);
        TokenManager.setAccessToken(action.payload.accessToken);
      }
    )
    .addMatcher(
      authApiSlice.endpoints.register.matchRejected,
      (state, action) => {
        state.error = action.error.message || null;
        state.user = null;
        TokenManager.deleteAccessToken();
        TokenManager.deleteRefreshToken();
      }
    )
    .addMatcher(
      authApiSlice.endpoints.getUser.matchRejected,
      (state, action) => {
        state.error = action.error.message || null;
        state.user = null;
      }
    )
    .addMatcher(
      authApiSlice.endpoints.getUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.error = null;
      }
    )
    .addMatcher(
      authApiSlice.endpoints.logout.matchFulfilled,
      (state, action) => {
        state.user = null;
        state.error = null;
        TokenManager.deleteAccessToken();
        TokenManager.deleteRefreshToken();
      }
    )
  }
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer; 