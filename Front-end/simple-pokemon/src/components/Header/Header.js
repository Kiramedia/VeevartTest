import React from "react";
import Logo from "../Logo/Logo";
import "./style.scss";

const Header = ({ srcLogo }) => {
  return (
    <div className="o-header">
      <div className="container">
        <Logo srcLogo={srcLogo}></Logo>
        <img className="complement" src="/resources/img/header-complement.png" alt="header complement"/>
      </div>
    </div>
  );
};

export default Header;
