import axios from "axios";
const API_URL = "http://localhost:8080";
const token = localStorage.getItem("token") || "";

const clientApi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: token,
  },
});

//  request / response 에 선행,후행 처리를 커스텀하게
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

    if (!token) throw Error("no token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clientApi;
