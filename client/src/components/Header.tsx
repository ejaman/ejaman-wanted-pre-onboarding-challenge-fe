import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/Auth";

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
  padding: 1rem 5rem 2rem;
  align-items: center;
  @media screen and (max-width: 62.5rem) {
    width: 100%;
    padding-right: 0.5rem;
  }
`;
const LogoutButton = styled.button`
  margin-left: auto;
  font-size: 1.1rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export default Header;
