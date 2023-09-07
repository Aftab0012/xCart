import React from "react";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
    console.log("loggedout");
  };

  return (
    <div className="nav-container">
      <div className="brand-name">xCart</div>
      <div className="nav-options">
        <div className="options">Home</div>
        <div className="options">Help</div>
        <div className="options">{localStorage.getItem("username")}</div>
        <div className="options">
          <IconButton onClick={logout}>
            <LogoutIcon fontSize="large"></LogoutIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
