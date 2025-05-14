import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean;
  user: {
    name: string;
    email: string;
  } | null;
}

const initialState: UserState = {
  isAuth: false,
  user: null,
};

const userSlice = createSlice({
  name: 'userSliceReducer',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { setAuth, setUser, logout } = userSlice.actions;
export default userSlice.reducer; 