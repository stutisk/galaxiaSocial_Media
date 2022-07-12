import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost ,getAllPost,getUserPost} from "../../services/postServices";


const initialState = {
  newuserPost:[],
  allPosts:[]
};

export const createNewPost = createAsyncThunk(
  "post/createNewPost",
  async (post, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await createPost (token, post);
      console.log(res)
      return res.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllPostHandler = createAsyncThunk("post/getAllPosts", async (_, thunkAPI) => {
  try {
    const res = await getAllPost();
    console.log(res.data)
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getUserPostHandler = createAsyncThunk("post/getUserPosts", async (username, thunkAPI) => {
  try {
    const res = await getUserPost(username);
    console.log(res.data.posts)
    return res.data.posts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: {
    [createNewPost.pending]: (state) => {
      state.status = "rejected";
    },
    [createNewPost.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.allPosts = payload;

    },
    [createNewPost.rejected]:(state)=> {
      state.status="rejected"
     
    },
    [getAllPostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [getAllPostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.allPosts = payload;

    },
    [getAllPostHandler.rejected]:(state)=> {
      state.status="rejected"
     
    },
    [getUserPostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [getUserPostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.newuserPost = payload;
      console.log(state)

    },
    [getUserPostHandler.rejected]:(state)=> {
      state.status="rejected"
     
    }
  },
});

export default postSlice.reducer;
