import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/posts/postSlice";
import { AuthReducer } from "../features/users/authReducers";

export default configureStore({
  reducer: {
    posts: postReducer,
    AuthReducer: AuthReducer,
  },
});
