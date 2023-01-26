import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (_, action) => {
      return action.payload;
    },
    logout: () => {
      return null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
