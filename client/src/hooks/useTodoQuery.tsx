import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/Auth";

import { ITodo, ToDoAPI } from "../apis/ToDo";

const useTodoQuery = () => {
  const Keys = {
    all: ["todos"] as const,
    details: () => [...Keys.all, "detail"] as const,
    detail: (id: string) => [...Keys.details(), id] as const,
  };

  const navigate = useNavigate();
  const client = useQueryClient();

  // const create = useMutation((todo: ITodo) => ToDoAPI.create(todo), {
  //   onSuccess: () => {
  //     client.invalidateQueries(Keys.all);
  //   },
  //   onError: (error) => {
  //     if (error instanceof AxiosError) alert(error.response?.data.details);
  //   },
  // });

  const register = useMutation(UserAPI.register, {
    onSuccess: () => {
      navigate("/auth/login");
    },
    onError: (error) => {
      if (error instanceof AxiosError) alert(error.response?.data.details);
    },
  }).mutate;

  return { register };
};

export default useTodoQuery;
