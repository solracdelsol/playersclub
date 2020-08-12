import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import Modal from './modal/modal.jsx'

const App = () => (
  <div>
    <Modal/>
    <Switch>
        <AuthRoute path='/' component={HomePageContainer} /> 
    </Switch>
  </div>
);

export default App;