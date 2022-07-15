import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPost,
  getAllPost,
  getUserPost,
  deletePost,
  editPost,
  addComment,
} from "../../services/postServices";

const initialState = {
  posts: [],
  userPosts: [],

};

export const createNewPost = createAsyncThunk(
  "posts/createNewPost",
  async ({ token, postData }, thunkAPI) => {
    try {
      // const token = localStorage.getItem("token");
      const res = await createPost(token, postData);
   console.log(res.data.posts)
      return res.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addCommentHandler = createAsyncThunk(
  "post/addCommenthandler",
  async ({ postId, commentData }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await addComment(postId, commentData, token);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getAllPostHandler = createAsyncThunk(
  "posts/ getAllPostHandler",
  async (token, thunkAPI) => {
    try {
      const res = await getAllPost(token);

      return res.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserPostHandler = createAsyncThunk(
  "post/getUserPostHandler",
  async (username, thunkAPI) => {
    try {
      const res = await getUserPost(username);
      return res.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePostHandler = createAsyncThunk(
  "post/deletePostHandler", 
  async (postId, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const res = await deletePost(postId, token);
    console.log(res.data.posts)
    return res.data.posts;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const editPostHandler = createAsyncThunk(
	"post/editPostHandler",
	async ({ token, postData }, thunkAPI) => {
		try {
			const res = await editPost(token, postData);
      console.log(res)
			return res.data.posts;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	}
);


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
      state.posts = payload.reverse();
    },
    [createNewPost.rejected]: (state) => {
      state.status = "rejected";
    },
    [getAllPostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [getAllPostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.posts = payload.reverse();
    },
    [getAllPostHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    [getUserPostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [getUserPostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.userPosts = payload;
    
    },
    [getUserPostHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    
    [deletePostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [deletePostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.posts = payload;
      console.log(state)
    
    },
    [deletePostHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    [editPostHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [editPostHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.posts = payload;
      console.log(state)
    
    },
    [editPostHandler.rejected]: (state) => {
      state.status = "rejected";
    },
    [addCommentHandler.pending]: (state) => {
      state.status = "rejected";
    },
    [addCommentHandler.fulfilled]: (state, { payload }) => {
      state.status = "fullfilled";
      state.posts = payload.posts;
      console.log(state)
    
    },
    [addCommentHandler.rejected]: (state) => {
      state.status = "rejected";
    }
  },
});

export default postSlice.reducer;
