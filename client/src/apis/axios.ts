import axios from "axios";
const API_URL = "http://localhost:8080";

const clientApi = axios.create({
  baseURL: API_URL,
});

clientApi.interceptors.response.use(
  (res) => {
    const { token } = res.data;
    localStorage.setItem("token", token);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

clientApi.interceptors.response.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) throw Error("no token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clientApi;
