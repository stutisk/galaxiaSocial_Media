import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPost ,getAllPost,getUserPost} from "../../services/postServices";


const initialState = {
  posts:[],
 userPosts:[]
};

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({token,postData}, thunkAPI) => {
    try {
      // const token = localStorage.getItem("token");
      const res = await createPost (token, postData);

      return res.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllPostHandler = createAsyncThunk("posts/getAllPosts", async (token, thunkAPI) => {
  try {
    const res = await getAllPost(token);
    
    return res.data.posts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});



export const getUserPostHandler = createAsyncThunk("post/getUserPosts", async (username, thunkAPI) => {
  try {
    const res = await getUserPost(username);
    console.log(res.data)
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
      state.posts= payload.reverse();
    
      

    },
    [createNewPost.rejected]:(state)=> {
      state.status="rejected"
     
    },
    [getAllPostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [getAllPostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.posts = payload.reverse();

    },
    [getAllPostHandler.rejected]:(state)=> {
      state.status="rejected"
     
    },
    [getUserPostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [getUserPostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.userPosts = payload;
      console.log(state)

    },
    [getUserPostHandler.rejected]:(state)=> {
      state.status="rejected"
     
    }
  },
});

export default postSlice.reducer;
