import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000/api/";

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
