import React from "react";
import { withRouter } from "react-router-dom";
import { decodeMoves, apiRequest } from "../../components/Functions/Funtions";
import Header from "../../components/Header/Header";
import "./style.scss";
import MoveData from "../../components/MoveData/MovesData";

class Moves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: decodeMoves(props.location.pathname),
      history: props.history,
      data: null,
    };
  }

  render() {
    return (
      <div className="o-moves">
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
          <MoveData
            pokeMoves={this.state.data.moves}
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

export default withRouter(Moves);
