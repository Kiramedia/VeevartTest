import React from "react";
import "./style.scss";

const InfoCard = ({ pokeName, frontSprite}) => {
  return (
    <div className="o-info-card">
      <img className="top" src="/resources/img/card-template.png" alt="" />
      <img className="bottom" src="/resources/img/card-template.png" alt="" />
      <h1>{pokeName}</h1>
      <img className="poke-image" src={frontSprite} alt={`${pokeName} sprite`} />
    </div>
  );
};

export default InfoCard;
