import React from "react";
import { withRouter } from "react-router-dom";
import { decodeSearch, apiRequest } from "../../components/Functions/Funtions";
import InfoCard from "../../components/InfoCard/InfoCard";
import PokemonData from "../../components/PokemonData/PokemonData";
import Header from "../../components/Header/Header";
import "./style.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: decodeSearch(props.location.search),
      history: props.history,
      data: null,
    };
  }

  render() {
    return (
      <div className="o-search">
        <Header srcLogo="Logo.png" />
        {this.checkDataState()}
      </div>
    );
  }

  checkDataState = () => {
    if (this.state.data === "Not pokemon") {
      return (
        <div className="o-body">
          <h1> Pokemon {this.state.search} not found. </h1>
        </div>
      );
    } else if (this.state.data) {
      return (
        <div className="o-body">
          <InfoCard
            pokeName={this.state.data.name}
            frontSprite={this.state.data.sprites.front_default}
          />
          <PokemonData
            pokeAbilities={this.state.data.abilities}
            pokeName={this.state.search}
          />
        </div>
      );
    }
    return null;
  };

  componentDidMount() {
    apiRequest(this, this.state.search);
  }
}

export default withRouter(Search);
