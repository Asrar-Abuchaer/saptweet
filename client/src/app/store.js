import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../features/posts/postSlice";
import { AuthReducer } from "../features/users/authReducers";
import usersReducer from "../features/userReducer/userReducer";

export default configureStore({
  reducer: {
    posts: postReducer,
    AuthReducer: AuthReducer,
    users: usersReducer,
  },
});
