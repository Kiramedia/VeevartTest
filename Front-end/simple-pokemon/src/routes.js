import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/info/:id" component={Details}/>
            </Switch>
        </App>
    );
};

export default Routes;