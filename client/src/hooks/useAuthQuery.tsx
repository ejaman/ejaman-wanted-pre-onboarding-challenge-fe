import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/Auth";

const useAuthQuery = () => {
  const navigate = useNavigate();
  const login = useMutation(UserAPI.login, {
    onSuccess: () => {
      navigate("/todo");
    },
    onError: (error) => {
      // 리랜더링이 필요함
      if (error instanceof AxiosError) alert(error.response?.data.details);
    },
  }).mutate;

  const register = useMutation(UserAPI.register, {
    onSuccess: () => {
      navigate("/auth/login");
    },
    onError: (error) => {
      if (error instanceof AxiosError) alert(error.response?.data.details);
    },
  }).mutate;

  return { login, register };
};

export default useAuthQuery;
