import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import HomePage from './home/home_page';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
        <AuthRoute path='/' component={HomePage} /> 
    </Switch>
  </div>
);

export default App;