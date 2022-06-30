import axios from "axios";

export const loginService = (loginData) => {
  return axios.post("/api/auth/login", loginData);
};

export const signUpService = (signupData) => {
  return axios.post("/api/auth/signup", signupData);
};