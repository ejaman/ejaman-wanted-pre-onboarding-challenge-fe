import React from "react";
import { useNavigate } from "react-router-dom";
import { onhandleLogout } from "../apis";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const onLogoutClick = () => {
    onhandleLogout();
    navigate("/");
  };
  return (
    <header style={{ display: "flex" }}>
      <h3>header todo application</h3>
      {token && <button onClick={onLogoutClick}>Logout</button>}
    </header>
  );
};

export default Header;
