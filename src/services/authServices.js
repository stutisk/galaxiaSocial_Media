import axios from "axios";

export const loginService = (email, password) => {
  return axios.post("/api/auth/login", {
    email: email,
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