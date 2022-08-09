import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onhandleRegister } from "../apis";
import reg from "../components/Reg";
import {
  BasicBtn,
  Container,
  LoginInput,
  PText,
} from "../components/styleComponents/LoginRegister";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  // 공통적으로 사용하는 기능
  const token = localStorage.getItem("token");
  useEffect(() => {
    token && navigate("/todo/list");
  }, [token, navigate]);
  //

  useEffect(() => {
    reg.email.test(email) && reg.password.test(pw)
      ? setError(false)
      : setError(true);
  }, [email, pw]);

  const onSubmitClick = async () => {
    const data = {
      email: email,
      password: pw,
    };
    onhandleRegister(data);
    navigate("/auth/login");
  };
  return (
    <Container>
      <h1>register</h1>
      <div>
        <PText>
          이메일 조건 : 최소 @, . 포함, 비밀번호 조건 : 알파벳 + 숫자 조합으로
          8자 이상 입력
        </PText>
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
          autoComplete="off"
          type="password"
        />
        <PText>
          {error ? (
            <p>형식에 맞게 이메일과 비밀번호를 작성해주세요.</p>
          ) : (
            <p>올바른 이메일과 비밀번호 형식입니다.</p>
          )}
        </PText>
        <BasicBtn onClick={onSubmitClick} disabled={error}>
          register
        </BasicBtn>
      </div>
    </Container>
  );
};

export default Register;
