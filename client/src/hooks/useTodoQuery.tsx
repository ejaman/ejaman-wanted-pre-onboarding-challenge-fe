import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { ITodo, ToDoAPI } from "../apis/ToDo";

const Keys = {
  all: ["todos"] as const,
  details: () => [...Keys.all, "detail"] as const,
  detail: (id: string) => [...Keys.details(), id] as const,
};

// 2 2개의 argument 필요 유니크 키 이 쿼리를 아이덴티파이할 유니크 키, 프로미스를 반환하는 함수 지금 예시에선 get request를 할 것
// 이렇게 하면 리졸트에 모든 정보가 담기게 됨 따라서 disstructure 해서 필요한 정보만 가져올 수 있음
// const result = useQuery("todos", () => {
//   return ToDoAPI.getTodos(token);
// });
// 보면 로딩이랑 데이터만 필요함
export const useGetTodos = (token: string) => {
  const { isLoading, data, isError } = useQuery(
    Keys.all,
    () => ToDoAPI.getTodos(token).then((res) => res.data)
    // {
    //   onSuccess: () => {},
    //   useErrorBoundary: (error: AxiosError) =>
    //     error instanceof AxiosError && error.response?.status !== undefined,
    // }
  );
  return { isLoading, data, isError };
};

// export function useCreateTodo() {
//   const queryClient = useQueryClient();
//   return useMutation((create: ITodo) => ToDoAPI.createToDo(create), {
//     onSuccess: () => {
//       queryClient.invalidateQueries(Keys.all);
//     },
//     useErrorBoundary: (error: AxiosError) =>
//       error instanceof AxiosError && error.response?.status !== undefined,
//   });
// }

// export function useUpdateToDo(id: string) {
//   const queryClient = useQueryClient();
//   return useMutation((update: ITodo) => ToDoAPI.update(update, id), {
//     onSuccess: () => queryClient.invalidateQueries(Keys.all),
//     useErrorBoundary: (error: AxiosError) =>
//       error instanceof AxiosError && error.response?.status !== undefined,
//   });
// }

// export function useDeleteToDo(id: string, token: string) {
//   const queryClient = useQueryClient();
//   return useMutation(() => ToDoAPI.del(id, token), {
//     onSuccess: () => queryClient.invalidateQueries(Keys.all),
//     useErrorBoundary: (error: AxiosError) =>
//       error instanceof AxiosError && error.response?.status !== undefined,
//   });
// }
