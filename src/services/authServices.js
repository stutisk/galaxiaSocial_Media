import axios from "axios";

export const loginService = (email, password) => {
  return axios.post("/api/auth/login", {
    email: email,
    password: password,
  });
};

export const signUpService = (firstName,lastName,email,password) => {
  return axios.post("api/auth/signup", {
    firstName: firstName,
    username: email,
    password: password,
    lastName:lastName
  });
};