import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpService, loginService } from "../../services/authServices";



export const signUpHandler = createAsyncThunk(
  "auth/signupHandler",
  async ({ firstName,lastName,username,password}, thunkAPI) => {
    try {
      const res = await signUpService(firstName,lastName,username,password);
      console.log(res)
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
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await loginService(username, password);
     
    return res.data
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
      console.log(state.user)
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(payload.createdUser));
      console.log(state)
    },
    [signUpHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    // login
    [loginHandler.pending]:(state) => {
      state.status="pending";
      console.log((state))
    
    },
    [loginHandler.fulfilled]: (state,{payload}) => {
      state.status = "fullfilled";
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(payload.foundUser));
      console.log((state))
    },
    [loginHandler.rejected]: (state,{payload}) => {
      state.authStatus = "rejected";    
      console.log((state))
     
     
    },
  },
});

export const {logoutHandler} = authSlice.actions;
export default authSlice.reducer;
