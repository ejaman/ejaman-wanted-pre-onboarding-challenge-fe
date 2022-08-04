import axios from "axios";
const API_URL = "http://localhost:8080";

export interface IData {
  email: string;
  password: string;
}
export interface ListType {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}
export interface ListProps {
  list: ListType;
}

export interface TodoType {
  title: string;
  content: string;
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

export const getTodos = (token: string) => {
  return axios.get(`${API_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTodoById = (id: string, token: string) => {
  return axios.get(`${API_URL}/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createTodo = (token: string, todo: TodoType) => {
  return axios.post(`${API_URL}/todos`, todo, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

export const updateTodo = async (id: string, token: string, todo: TodoType) => {
  return await axios
    .put(`${API_URL}/todos/${id}`, todo, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => console.log(res.data));
};

export const deleteTodo = async (id: string, token: string) => {
  return await axios
    .delete(`${API_URL}/todos/${id}`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((res) => console.log(res.data));
};
