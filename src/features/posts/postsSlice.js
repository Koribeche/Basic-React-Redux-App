import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  filtre: { title: "", genre: "", page: 0 },
  nbrPages: 1,
};

export const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state, _) => {
      state.filtre = { title: "", genre: "", page: 0 };
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.nbrPages = action.payload.nbrPages;
    },
    setFiltre: (state, action) => {
      state.filtre = { ...state.filtre, ...action.payload };
    },
  },
});

export const { setPosts, setFiltre, reset } = posts.actions;
export default posts.reducer;
