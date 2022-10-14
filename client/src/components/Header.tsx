import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../apis/Auth";
import { useResetRecoilState } from "recoil";
import { tokenState } from "../state/tokenState";

const Header = () => {
  const navigate = useNavigate();
  const TokenResetState = useResetRecoilState(tokenState);
  const token = localStorage.getItem("token");

  const onLogoutClick = () => {
    UserAPI.logout();
    TokenResetState();
    navigate("/");
  };
  return (
    <HeaderContainer>
      {token && <LogoutButton onClick={onLogoutClick}>Logout</LogoutButton>}
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  padding: 2rem 0;
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
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export default Header;
