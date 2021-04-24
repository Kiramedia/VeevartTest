import React from "react";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import PokemonData from "../../data/poke-json.json";
import "./style.scss";

class Home extends React.Component {
  render() {
    const PokemonsCard = PokemonData.map((pokeData) => {
      return (
        <Card
          pokeSprite={pokeData.sprites.front_default}
          pokeName={pokeData.name}
          key={pokeData.id}
        />
      );
    });

    return (
      <div className="o-home">
        <Header srcLogo="Logo.png" />
        <div className="o-body">{PokemonsCard}</div>
      </div>
    );
  }
}

export default Home;
