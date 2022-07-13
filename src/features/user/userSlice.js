import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../../services/userServices";
import { editUser } from "../../services/userServices";

export const getUserHandler = createAsyncThunk(
  "post/getUserHandler",
  async (_, thunkAPI) => {
    try {
      const res = await getAllUser();
      return res.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
 
};

export const updateuserHandler = createAsyncThunk(
  "user/updateuserHandler",
  async (userData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await editUser(token, userData);
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserHandler.pending]: (state) => {
      state.status = "pending";
    },
    [getUserHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.users = payload.users;
      console.log(state)
    
    },
    [getUserHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    [updateuserHandler.pending]: (state) => {
      state.status = "pending";
    },
    [updateuserHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [updateuserHandler.rejected]:(state)=> {
      state.status="rejected"
     
    }
  },
});
export default userSlice.reducer;
