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
  getTodos: () => {
    return clientApi.get("/todos", {});
  },

  getTodoById: (id: string) => {
    return clientApi.get(`todos/${id}`, {});
  },

  create: async (todo: ITodo) => {
    return clientApi.post("/todos", todo, {});
  },

  update: async (id: string, todo: ITodo) => {
    return await clientApi.put(`todos/${id}`, todo, {});
  },

  del: async (id: string) => {
    return await clientApi.delete(`/todos/${id}`, {});
    // .then((res) => console.log(res.data));
  },
};
