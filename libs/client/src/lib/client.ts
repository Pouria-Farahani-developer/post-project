import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://api.open-meteo.com/";

const client: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: false,
});

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default client;
