import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  user: {},
  isLogin: false,
};

export const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { data } = action.payload;
      state.user = {
        data,
      };
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
    },
    logoutSuccess: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem("token");
    },
    keepLoginSuccess: (state) => {
      state.isLogin = true;
    },
  },
});

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      localStorage.getItem("token", res?.data?.data?.user);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(loginSuccess());
    } catch (err) {
      alert(err?.response?.data);
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const res = await axios.get("http://localhost:8000/auth/keep-login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setUser(res?.data?.data));
        dispatch(keepLoginSuccess());
      }
    } catch (err) {}
  };
};

export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } =
  AuthReducer.actions;

export default AuthReducer.reducer;
