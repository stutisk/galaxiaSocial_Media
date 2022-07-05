import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpService, loginService } from "../../services/authServices";

export const signUpHandler = createAsyncThunk(
  "auth/signupHandler",
  async ({ fullName, email, password }, thunkAPI) => {
    try {
      const res = await signUpService(fullName, email, password);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

export const loginHandler = createAsyncThunk(
  "auth/loginHandler",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await loginService(email, password);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // signup
    [signUpHandler.pending]: (state) => {
      state.status = "pending";
    },
    [signUpHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(payload.createdUser));
    },
    [signUpHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    // login
    [loginHandler.pending]:(state) => {
      state.status="pending";
    },
    [loginHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(payload.foundUser));
    },
    [loginHandler.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default authSlice.reducer;
