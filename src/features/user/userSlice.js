import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getAllUser,
  editUser,
  followUser,
  unFollowUser,
} from "../../services/userServices";

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

export const updateuserHandler = createAsyncThunk(
  "users/updateuserHandler",
  async (userData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await editUser(token, userData);
      // console.log(res.data.user);
      return res.data.user;
    } catch (error) {

      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const followUnFollowUser = createAsyncThunk(
  "post/followUnFollowUser",
  async ({followuserId, dispatch, isFollow }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = !isFollow
        ? await unFollowUser(token, followuserId)
        : await followUser(token, followuserId);
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
    [updateuserHandler.pending]: (state) => {
      state.status = "pending";
    },
    [updateuserHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    [updateuserHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    [followUnFollowUser.pending]: (state) => {
      state.users= "pending";
    },
    [followUnFollowUser.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.users = [...state.users].map((user) => {
        if (action.payload.followUser.username === user.username) {
          console.log(state)
          return action.payload.followUser;
        }
        return user;
      });
    },
    [followUnFollowUser.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.users = action.payload;
    },
  },
  });
export default userSlice.reducer;
