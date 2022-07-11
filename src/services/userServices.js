import axios from "axios"
export const getUser = () => {
  return axios.get("/api/users");
};



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
