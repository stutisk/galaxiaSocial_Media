import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllUser,
  followUser,
  unFollowUser,
} from "../../services/userServices";
import { updateuserHandler } from "../auth/authSlice";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (token, thunkAPI) => {
    try {
      const res = await getAllUser(token);
      return res.data.users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  notFollowing: [],
 
};



export const followUnFollowUser = createAsyncThunk(
  "post/followUnFollowUser",
  async ({ userId, dispatch, isFollow }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = !isFollow
        ? await unFollowUser(token, userId)
        : await followUser(token, userId);
      dispatch(updateuserHandler(res.data.user));
      return res.data;
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
    [getAllUsers.pending]: (state) => {
      state.status = "pending";
    },
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.users = payload;
    },
    [getAllUsers.rejected]: (state) => {
      state.status = "rejected";
    },
  
    [followUnFollowUser.pending]: (state) => {
      state.status = "pending";
    },
    [followUnFollowUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.users = [...state.users].map((user) => {
        if (action.payload.followUser.username === user.username) {
          return action.payload.followUser;
        }
        return user;
      });
    },
    [followUnFollowUser.rejected]: (state) => {
      state.status = "rejected";
     
    },
  },
  });
export default userSlice.reducer;
