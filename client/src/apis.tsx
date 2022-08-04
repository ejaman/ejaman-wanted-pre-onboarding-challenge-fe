import axios from "axios";
const API_URL = "http://localhost:8080";

interface IData {
  email: string;
  password: string;
}
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

export const getTodos = (token: string | null) => {
  return axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTodoById = (id: string, token: string | null) => {
  return axios.get(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createTodo = (token: string | null) => {
  // TODO: 수정해야함 todo도 받아와야함
  const todo = {
    title: "test1",
    content: "content1",
  };
  return axios
    .post(`${API_URL}/todos`, todo, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => console.log(res.data));
};

export const updateTodo = (id: string, token: string | null) => {
  // TODO: 수정해야함
  const todo = {
    title: "test1",
    content: "content1",
  };
  return axios
    .put(`${API_URL}/todos/${id}`, todo, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => console.log(res.data));
};

export const deleteTodo = (id: string, token: string | null) => {
  // TODO: 수정해야함
  return axios
    .put(`${API_URL}/todos/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => console.log(res.data));
};
