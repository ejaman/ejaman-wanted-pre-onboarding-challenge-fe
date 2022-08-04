import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onhandleLogin } from "../apis";
import reg from "../components/Reg";

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
    onhandleLogin(data);
    setToken(localStorage.getItem("token")); // TODO: 작동하는데 너무 느림
  };

  const goToRegister = () => {
    navigate("/auth/register");
  };

  return (
    <div>
      <h1>login</h1>
      <div>
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="email"
          autoComplete="off"
        />
        <input
          onChange={(event) => setPw(event.target.value)}
          placeholder="password"
          type="password"
          autoComplete="off"
        />
        {error && <p>형식에 맞게 이메일과 비밀번호를 작성해주세요</p>}
      </div>
      <button onClick={onLoginClick} disabled={error}>
        login
      </button>
      <button onClick={goToRegister}>register</button>
    </div>
  );
};

export default Login;
