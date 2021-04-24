import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const PokemonData = ({ pokeAbilities, pokeName }) => {
  const abilities = pokeAbilities.map((pokeData) => {
    const effects = pokeData.ability.effect_entries.map((pokeEffect) => {
      return <p key={pokeEffect.short_effect}>{pokeEffect.short_effect}</p>;
    });
    return (
      <div key={pokeData.ability.name}>
        <h2 key={pokeData.ability.name + "h2"}>{pokeData.ability.name}</h2>
        {effects}
      </div>
    );
  });
  
  return (
    <div className="o-poke-data">
      <h1>Abilities</h1>
      {abilities}
      <h1>Moves</h1>
      <Link to={`/moves/${pokeName}`}>Detalles</Link>
    </div>
  );
};

export default PokemonData;
