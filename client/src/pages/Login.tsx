import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/User";
import reg from "../utils/vaildation";

import {
  BasicButton,
  Container,
  LoginInput,
  PText,
} from "../components/styleComponents/LoginRegister";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    // 로그인이 되어있다면 바로 리다이렉트되도록
    token && navigate("/todo");
  }, [token, navigate]); // TODO: navigate를 Deps으로..?

  useEffect(() => {
    reg.email.test(email) && reg.password.test(pw)
      ? setError(false)
      : setError(true);
  }, [email, pw]);

  const onLoginClick = async () => {
    const data = {
      email: email,
      password: pw,
    };
    UserAPI.login(data);
    setToken(localStorage.getItem("token")); // TODO: 작동하는데 너무 느림
  };

  const goToRegister = () => {
    navigate("/auth/register");
  };

  return (
    <Container>
      <h1>login</h1>
      <div>
        <LoginInput
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="email"
          autoComplete="off"
        />
        <LoginInput
          onChange={(event) => setPw(event.target.value)}
          placeholder="password"
          type="password"
          autoComplete="off"
        />
        <PText>
          {error ? (
            <p>형식에 맞게 이메일과 비밀번호를 작성해주세요.</p>
          ) : (
            <p>올바른 이메일과 비밀번호 형식입니다.</p>
          )}
        </PText>
      </div>
      <div>
        <BasicButton onClick={onLoginClick} disabled={error}>
          login
        </BasicButton>
        <BasicButton onClick={goToRegister}>register</BasicButton>
      </div>
    </Container>
  );
};

export default Login;
