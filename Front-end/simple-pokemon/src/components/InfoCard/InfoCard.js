import React from "react";
import "./style.scss";

const InfoCard = ({ pokeName, frontSprite, backSprite }) => {
  return (
    <div className="o-info-card">
      <img className="top" src="/resources/img/card-template.png" alt="" />
      <img className="bottom" src="/resources/img/card-template.png" alt="" />
      <h1>{pokeName}</h1>
      <div className="sprites-container">
        <img className="poke-image" src={frontSprite} alt={`${pokeName} front sprite`} />
        <img className="poke-image" src={backSprite} alt={`${pokeName} back sprite`} />
      </div>
    </div>
  );
};

export default InfoCard;
