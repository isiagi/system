import axios from "axios";

export const BASE_URL = "https://system-be-sm4x.onrender.com/api/";

export const axiosLogin = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("token", localStorage.getItem("token"));

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
});
