import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/User";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onLogoutClick = () => {
    UserAPI.logout();
    navigate("/");
  };
  return (
    <HeaderContainer>
      {token && <LogoutButton onClick={onLogoutClick}>Logout</LogoutButton>}
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  display: flex;
  padding: 1rem 5rem 5rem;
  align-items: center;
`;
const LogoutButton = styled.button`
  margin-left: auto;
  font-size: 1.1rem;
  font-weight: bold;
  background: none;
  border: none;
  &:hover {
    opacity: 0.5;
  }
`;

export default Header;
