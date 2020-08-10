import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

const App = () => (
  <Switch>
      <AuthRoute exact path='/' /> 
  </Switch>
);