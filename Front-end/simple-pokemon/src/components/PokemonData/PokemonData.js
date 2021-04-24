import React from "react";
import "./style.scss";

const PokemonData = ({ pokeMoves, pokeAbilities }) => {
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

  console.log(abilities);

  const moves = pokeMoves.map((pokeData) => {
    const effects = pokeData.effect_entries.map((pokeEffect) => {
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
    <div className="o-poke-data">
      <h1>Abilities</h1>
      {abilities}
      <h1>Moves</h1>
      {moves}
    </div>
  );
};

export default PokemonData;
