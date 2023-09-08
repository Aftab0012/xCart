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
    <div>
      <div className="p-6 flex flex-row justify-between bg-customGray text-xl text-customGrayForText">
        <div className="brand-name pl-12">xCart</div>
        <div className="nav-options flex ">
          <div className="options pr-5">Home</div>
          <div className="options pr-5">Help</div>
          <div className="options pr-5">{localStorage.getItem("username")}</div>
          <div className="options pr-5">
            <IconButton onClick={logout}>
              <LogoutIcon fontSize="large"></LogoutIcon>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
