import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Card = ({ pokeName, pokeSprite }) => {
  return (
    <div className="o-card">
      <img className="top" src="/resources/img/card-template.png" alt=""/>
      <img className="bottom" src="/resources/img/card-template.png" alt=""/>
      <h1>{pokeName}</h1>
      <img className="poke-image" src={pokeSprite} alt=""/>
      <Link to={`/info/${pokeName}`}>Detalles</Link>
    </div>
  );
};

export default Card;
