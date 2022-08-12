import clientApi from "./axios";

export type UserInfoType = {
  email: string;
  password: string;
};

export const UserAPI = {
  register: async (data: UserInfoType) => {
    try {
      await clientApi.post("/users/create", data);
    } catch (err) {
      alert("이미 가입된 이메일입니다.");
    }
  },

  login: async (data: UserInfoType) => {
    await clientApi
      .post("/users/login", data)
      .then((res) => localStorage.setItem("token", res.data.token));
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};
