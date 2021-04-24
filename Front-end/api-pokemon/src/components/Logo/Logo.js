import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Logo = ({ srcLogo }) => {
  return (
    <Link to="/" className="o-logo">
      <img
        src={`/resources/img/${srcLogo}`}
        alt="Pokedex by Kevin logo"
      />
    </Link>
  );
};

export default Logo;
