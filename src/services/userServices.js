import axios from "axios";

export const getAllUser = () => 
axios.get("/api/users");
;

;

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
