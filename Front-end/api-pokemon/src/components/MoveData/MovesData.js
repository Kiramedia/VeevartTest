import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const MoveData = ({ pokeMoves, pokeName }) => {
  const moves = pokeMoves.map((pokeData) => {
      console.log(pokeData);
    const effects = pokeData.move.effect_entries.map((pokeEffect) => {
      return <p key={pokeEffect.short_effect}>{pokeEffect.short_effect}</p>;
    });
    return (
      <div key={pokeData.move.name}>
        <h2 key={pokeData.move.name + "h2"}>{pokeData.move.name}</h2>
        {effects}
      </div>
    );
  });
  
  return (
    <div className="o-poke-moves">
      <h1>{pokeName} moves</h1>
      <div className="content">{moves}</div>
      <Link to={`/search?query=${pokeName}`}>Return</Link>
    </div>
  );
};

export default MoveData;
