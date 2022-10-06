import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { ITodo, ToDoAPI } from "../apis/ToDo";

const Keys = {
  all: ["todos"] as const,
  details: () => [...Keys.all, "detail"] as const,
  detail: (id: string) => [...Keys.details(), id] as const,
};

export const useGetTodos = (token: string) => {
  const { isLoading, data, isError } = useQuery(
    Keys.all,
    () => ToDoAPI.getTodos().then((res) => res.data),
    {
      onSuccess: () => {},
    }
  );
  return { isLoading, data, isError };
};

export function useCreateTodo() {
  const queryClient = useQueryClient();
  return useMutation((todo: ITodo) => ToDoAPI.create(todo), {
    onSuccess: () => {
      // invaildate queries: queryKey의 유효성을 제거해주는 목적으로 사용
      // -> 왜 제거? 서버로부터 데이터를 다시 조회해오기 위해
      queryClient.invalidateQueries(Keys.all);
    },
  });
}

export function useUpdateToDo(id: string) {
  const queryClient = useQueryClient();
  return useMutation((todo: ITodo) => ToDoAPI.update(id, todo), {
    onSuccess: () => queryClient.invalidateQueries(Keys.all),
  });
}

export function useDeleteToDo(id: string) {
  const queryClient = useQueryClient();
  return useMutation(() => ToDoAPI.del(id), {
    onSuccess: () => queryClient.invalidateQueries(Keys.all),
  });
}
