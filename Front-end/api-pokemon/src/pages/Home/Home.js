import React from "react";
import Logo from "../../components/Logo/Logo";
import Searcher from "../../components/Searcher/Searcher";
import "./style.scss";

class Home extends React.Component {
    render() {
        return (
            <div className="o-home">
                <Logo srcLogo="Logo.png"/>
                <Searcher/>
            </div>
        )
    };
}

export default Home;