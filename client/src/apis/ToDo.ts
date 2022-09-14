import clientApi from "./axios";

export interface ITodo {
  title: string;
  content: string;
}
export interface IList {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}
export interface ListProps {
  list: IList;
}

export const ToDoAPI = {
  getTodos: (token: string) => {
    return clientApi.get("/todos", {
      headers: {
        Authorization: token,
      },
    });
  },

  getTodoById: (id: string, token: string) => {
    return clientApi.get(`todos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  },

  create: async (token: string, todo: ITodo) => {
    return clientApi.post("/todos", todo, {
      headers: {
        Authorization: token,
      },
    });
  },

  update: async (id: string, token: string, todo: ITodo) => {
    return await clientApi.put(`todos/${id}`, todo, {
      headers: {
        Authorization: token,
      },
    });
  },

  del: async (id: string, token: string) => {
    return await clientApi.delete(`/todos/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    // .then((res) => console.log(res.data));
  },
};
