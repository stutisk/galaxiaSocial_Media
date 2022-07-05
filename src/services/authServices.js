import axios from "axios";

export const loginUserService = (email, password) => {
  return axios.post("api/auth/login", {
    email: email,
    password: password,
  });
};

export const signUpService = (email, password,fullName) => {
  return axios.post("api/auth/signup", {
    fullName: fullName,
    email: email,
    password: password,
  });
};