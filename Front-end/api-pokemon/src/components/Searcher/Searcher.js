import React from "react";
import { withRouter} from 'react-router-dom';
import "./style.scss";

class Searcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { history: props.history, location: props.location };
    };

    render() {
        return (
            <form className="o-searcher" onSubmit={this.onSubmit}>
                <input className="input" onChange={this.onHandleChange} type="text" name="query" placeholder="Pokemon character" autoComplete="on" required />
                <button className="button" type="submit"><img src="/resources/img/search.png" alt="" /></button>
            </form>
        );
    };

    onHandleChange = (event) =>{
        this.setState({pokemonInput: event.target.value});
    }

    onSubmit = (event) => {
        if (this.state.location.pathname !== "/search") {
            event.preventDefault();
            this.state.history.push({
                pathname: '/search',
                search: '?query=' + this.state.pokemonInput,
                state: { some: 'state' }
            });
        }
    }
}

export default withRouter(Searcher);