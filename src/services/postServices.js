import axios from "axios";

export const createPost = (token, postData) => {
  return axios.post(
    "/api/posts",
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

// export const getAllPost = (token) =>
//   axios.get("/api/posts", { headers: { authorization: token } });

   export const getAllPost = () => {
    return axios.get("/api/posts");
  };

export const getUserPost = (username) =>
  axios.get(`/api/posts/user/${username}`);

export const deletePost = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });

  


export const addComment = (postId, commentData, token) =>
  axios.post(
    `/api/comments/add/${postId}`,
    { 
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

  
export const editPost = (token, postData) =>
  axios.post(
    `/api/posts/edit/${postData._id}`,
    { postData },
    { headers: { authorization: token } }
  );

   export const likePost= (postId, token ) => {
    return axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };
  
   export const dislikePost = (postId, token ) => {
    return axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );
  };