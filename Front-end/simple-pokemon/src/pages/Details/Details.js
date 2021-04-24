import React from "react";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import PokemonData from "../../components/PokemonData/PokemonData";
import PokeData from "../../data/poke-json.json";
import { withRouter } from "react-router-dom";
import "./style.scss";

class Details extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.getPokemon(PokeData, props.location.pathname.replace("/info/", "")),
    };
  }

  render() {

    return (
      <div className="o-details">
        <Header srcLogo="Logo.png" />
        <div className="o-body">
          <InfoCard
            pokeName={this.state.data.name}
            frontSprite={this.state.data.sprites.front_default}
            backSprite={this.state.data.sprites.back_default}
          />
          <PokemonData pokeMoves={this.state.data.moves} pokeAbilities={this.state.data.abilities}/>
        </div>
      </div>
    );
  }

  getPokemon(data, name){
    var result = {};
    for (let item of data){
      if(item.name === name){
        console.log(item);
        result = item;
        break;
      }
    }
    return result;
  }

}
export default withRouter(Details);
