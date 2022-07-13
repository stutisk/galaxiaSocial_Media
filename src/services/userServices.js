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
