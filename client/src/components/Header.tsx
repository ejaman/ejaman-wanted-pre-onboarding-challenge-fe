import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { onhandleLogout } from "../apis/apis";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onLogoutClick = () => {
    onhandleLogout();
    navigate("/");
  };
  return (
    <HeaderDiv>
      <h3>Wanted preonboarding challenge FE 1</h3>
      {token && <LogoutBtn onClick={onLogoutClick}>Logout</LogoutBtn>}
    </HeaderDiv>
  );
};
const HeaderDiv = styled.header`
  display: flex;
  padding: 1rem 5rem;
  align-items: center;
  color: #ffffff63;
`;
const LogoutBtn = styled.button`
  margin-left: auto;
  font-size: 1.1rem;
  font-weight: bold;
  background: none;
  border: none;
  color: #ffffff63;
  &:hover {
    opacity: 0.5;
  }
`;

export default Header;
