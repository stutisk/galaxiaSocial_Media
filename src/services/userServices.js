import axios from "axios";

export const getAllUser = (token) =>
  axios.get("/api/users", { headers: { authorization: token } });
  


export const editUser = (token, userData) => {
  return axios.post(
    "/api/users/edit",
    {
      userData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const addBookmarks= (postId, token ) => {
  return axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

 export const removeBookmark = (postId, token ) => {
  return axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: token },
    }
  );
};

export const followUser= (token, followuserId) => {
  return axios.post(
    `/api/users/follow/${followuserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};

export const unFollowUser = (token, followuserId) => {
  return axios.post(
    `/api/users/unfollow/${followuserId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
};