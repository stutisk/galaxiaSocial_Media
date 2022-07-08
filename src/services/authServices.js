import axios from "axios";

export const loginService = (username, password) => {
  return axios.post("/api/auth/login", {
    username: username,
    password: password,
  });
};

export const signUpService = (firstName,lastName,username,password) => {
  return axios.post("api/auth/signup", {
    firstName: firstName,
    username: username,
    password: password,
    lastName:lastName
  });
};