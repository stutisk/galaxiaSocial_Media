import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpService, loginService } from "../../services/authServices";
import {
  CircularProgress 
} from "../../utils/material-ui/materialComponents";


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
     console.log(email)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      logoutHandler:() => {   
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        return{
          user:null,
          token:null,
        }
      
    }
  },
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
    [loginHandler.fulfilled]: (state,action) => {
      state.status = "fullfilled";
      localStorage.setItem("token", action.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
    },
    [loginHandler.rejected]: (state) => {
      state.status = "rejected";
     
     
    },
  },
});

export const {logoutHandler} = authSlice.actions;
export default authSlice.reducer;
