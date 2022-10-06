import { atom } from "recoil";

// isLogined 로 바꿔야 하나? 일단 토큰이 있는걸로 나와서 리다이렉트가 안됨
interface IToken {
  token: string;
}

export const tokenState = atom<IToken>({
  key: "token",
  default: { token: "" },
});
