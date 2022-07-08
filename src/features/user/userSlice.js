import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../services/userServices";

export const getUserHandler = createAsyncThunk(
  "user/getUserHandler",
  async (_, thunkAPI) => {
    try {
      const res = await getUser();
      return res.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
 users:[],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserHandler.pending]:(state)=>{
      state.status="rejected"
    },
    [getUserHandler.fulfilled]:(state,{payload})=>{
      state.status="fullfilled";
      state.users=payload;
      console.log(state)

    },
    [getUserHandler.rejected]:(state) => {
      state.status="rejected"
    }
    },
});
export default userSlice.reducer;
