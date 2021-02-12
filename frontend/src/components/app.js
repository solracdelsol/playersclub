import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './home/home_page_container';
import PlayersBar from './players_bar/players_bar_container';
import Modal from './modal/modal.jsx';
import SearchContainer from './search/search_container';
import TeamContainer from './team/team_container';
import TeamShowContainer from './team/team_show_container';
import PlayerContainer from './player/player_container';
import '../reset.css';
// import SportContainer from './sports/sports_container';

const App = () => (
  <>
    <header>
      <PlayersBar />
    </header>
    <Modal />
    {/* // will render the first component to match */}

    <Switch>
      {/* <ProtectedRoute path="/sports" component={SportContainer} /> */}
      <ProtectedRoute exact path="/teams" component={TeamContainer} />
      <ProtectedRoute
        path="/teams/:sport/:teamID"
        component={TeamShowContainer}
      />
      <ProtectedRoute
        path="/players/:sport/:playerId"
        component={PlayerContainer}
      />
      <ProtectedRoute path="/search" component={SearchContainer} />
      <Route path="/" component={HomePageContainer} />
    </Switch>
  </>
);

export default App;
