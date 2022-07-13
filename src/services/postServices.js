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

  export const getAllPost = (token) => axios.get("/api/posts",{ headers: { authorization: token } });

  export const getUserPost = (username) => axios.get(`/api/posts/user/${username}`);