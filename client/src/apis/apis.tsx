import axios from "axios";
const API_URL = "http://localhost:8080";

export type IData = {
  email: string;
  password: string;
};

export const onhandleRegister = async (data: IData) => {
  try {
    await axios.post(`${API_URL}/users/create`, data);
  } catch (err) {
    alert("이미 가입된 이메일입니다.");
  }
};
export const onhandleLogin = async (data: IData) => {
  await axios
    .post(`${API_URL}/users/login`, data)
    .then((res) => localStorage.setItem("token", res.data.token));
};
export const onhandleLogout = () => {
  localStorage.removeItem("token");
};
