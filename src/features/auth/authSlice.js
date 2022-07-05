import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signUpService } from "../../services/authServices";

export const signUpHandler = createAsyncThunk(
  "auth/signupHandler",
  async ({  fullName ,email,password}, thunkAPI) => {
    try {
      const res = await signUpService(fullName,email, password);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [signUpHandler.pending]: (state) => {
      state.status = "pending";
    },
    [signUpHandler.fulfilled]: (state, {payload}) => {
      state.status = "fullfilled";
      state.token = payload.encodedToken;
      state.user = payload.createdUser;
      localStorage.setItem("token", payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(payload.createdUser));
    },
  },
  [signUpHandler.rejected]:(state)=>{
    state.status="rejected";
    
  }

});

export default authSlice.reducer;
