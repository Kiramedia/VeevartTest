import React from "react";
import Logo from "../Logo/Logo";
import Searcher from "../Searcher/Searcher";
import "./style.scss";

const Header = ({ srcLogo }) => {
  return (
    <div className="o-header">
      <div className="container">
        <Logo srcLogo={srcLogo}></Logo>
        <Searcher/>
      </div>
    </div>
  );
};

export default Header;
