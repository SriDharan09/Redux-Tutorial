import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Features/Posts/PostSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
