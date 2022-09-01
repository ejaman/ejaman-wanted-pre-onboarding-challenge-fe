import clientApi from "./axios";

export type TodoType = {
  title: string;
  content: string;
};

export type ListType = {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
};

export type ListProps = {
  list: ListType;
};

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

  create: async (token: string, todo: TodoType) => {
    return clientApi.post("/todos", todo, {
      headers: {
        Authorization: token,
      },
    });
  },

  update: async (id: string, token: string, todo: TodoType) => {
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
