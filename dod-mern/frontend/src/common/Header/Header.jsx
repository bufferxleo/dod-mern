import React from "react";
import "./Header.css";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <h1 className="title">DOMAIN-IN-DOMAIN</h1>
      <CiHome
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default Header;
