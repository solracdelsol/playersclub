import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import PlayersBar from './players_bar/players_bar_container';
import Modal from './modal/modal.jsx';
import SearchContainer from './search/search_container';
import TeamContainer from './team/team_container';
import '../reset.css';
// import SportContainer from './sports/sports_container';

import PreferencesContainer from '../components/preferences/preferences_container';

const App = () => (
  <div className="homepage-background">
    <header>
      <PlayersBar />
    </header>
    <div>
      <Modal />
      {/* // will render the first component to match */}

      {/* <PreferencesContainer/> */}

      <Switch>
        {/* <ProtectedRoute path="/sports" component={SportContainer} /> */}
        <ProtectedRoute path="/teams" component={TeamContainer} />
        {/* <ProtectedRoute path="/teams/:teamID" component={TeamShow} /> */}
        <ProtectedRoute path="/search" component={SearchContainer} />
        <Route path="/" component={HomePageContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
