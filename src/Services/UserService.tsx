/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const BASE_URL = "http://localhost:8080/users/";

const registerUser = async (user: any) => {
  return axios
    .post(`${BASE_URL}register`, user)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const loginUser = async (login: any) => {
  return axios
    .post(`${BASE_URL}login`, login)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const sendOtp = async (email: any) => {
  return axios
    .post(`${BASE_URL}sendOtp/${email}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const verifyOtp = async (email: any, otp: any) => {
  return axios
    .get(`${BASE_URL}verifyOtp/${email}/${otp}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const changePassword = async (email: string, password: string) => {
  return axios
    .post(`${BASE_URL}changePassword`, { email, password })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
export { registerUser, loginUser, sendOtp, verifyOtp, changePassword };
