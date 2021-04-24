import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home';
import Moves from './pages/Moves/Moves';
import Search from './pages/Search/Search';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/moves/:id" component={Moves}/>
            </Switch>
        </App>
    );
};

export default Routes;