import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postsReducer from "../features/posts/postsSlice";
import panierReducer from "../features/panier/panierSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    panier: panierReducer,
  },
});
