import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import PlayersBar from './players_bar/players_bar_container';
import Modal from './modal/modal.jsx';
import SearchContainer from './search/search_container';
import TeamContainer from './team/team_container';
import TeamShowContainer from './team/team_show_container';
import '../reset.css';
// import SportContainer from './sports/sports_container';

import PreferencesContainer from '../components/preferences/preferences_container';

const App = () => (
  <div className="background">
    <header>
      <PlayersBar />
    </header>
    <Modal />
    {/* // will render the first component to match */}

    {/* <PreferencesContainer/> */}

    <Switch>
      {/* <ProtectedRoute path="/sports" component={SportContainer} /> */}
      <Route exact path="/teams" component={TeamContainer} />
      <Route path="/teams/:sport/:teamID" component={TeamShowContainer} />
      {/* <Route path="/:sport/players/:playerId" component={PlayerContainer} /> */}
      <Route path="/search" component={SearchContainer} />
      <Route path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
