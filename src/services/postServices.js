import axios from "axios";
export const createPost = (token, post) => {
    return axios.post(
      "/api/posts",
      {
        post,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  
  export const getAllPost = () => axios.get("/api/posts");

  export const getUserPost = (username) => axios.get(`/api/posts/user/${username}`);