import React from 'react';
import './score.css';
import '../../reset.css';
// import { MLBkey, MLBTrial, NBATrial, NBAkey, NHLTrial, NHLkey  } from '../../src_keys';


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.mlbGameContainer = this.mlbGameContainer.bind(this);
    this.nhlGameContainer = this.nhlGameContainer.bind(this);
    this.nbaGameContainer = this.nbaGameContainer.bind(this);
    this.fetchGame = this.fetchGame.bind(this);
  }

  mlbGameContainer() {
    
    return this.props.sports.mlb.map(gm => {
      return (
        <ul>
          <li>{gm.data.game.home.name}</li>
          <li>{gm.data.game.home.runs}</li>
          <li>{gm.data.game.away.name}</li>
          <li>{gm.data.game.away.runs}</li>
          <li>{gm.data.game.venue.name}</li>
        </ul>
      );
    });
  }


  nbaGameContainer() {
    return this.props.sports.nba.map(gm => {
      return (
        <ul>
          <li>{gm.data.home.name}</li>
          <li>{gm.data.home.points}</li>
          <li>{gm.data.away.name}</li>
          <li>{gm.data.away.points}</li>
        </ul>
      );
    });
  }

  nhlGameContainer() {
    return this.props.sports.nhl.map(gm => {
      return (
        <ul>
          <li>{gm.data.game.home.name}</li>
          <li>{gm.data.game.home.points}</li>
          <li>{gm.data.game.away.name}</li>
          <li>{gm.data.game.away.points}</li>
        </ul>
      );
    });
  }

  componentDidMount() {
    this.fetchGame()
    
  }

  fetchGame() {
 
    // this.props.sports.MLB.data.games.map((game, idx) => {
    //   setTimeout(() => (this.props.fetchGameScore(MLBTrial, game.id, MLBkey)), 1200 * idx)
    // });

    this.props.sports.NHL.data.games.map((game, idx) => {
      setTimeout(() => (this.props.fetchGameScore(NHLTrial, game.id, NHLkey)), 1200 * idx)
    });
    
    this.props.sports.NBA.data.games.map((game, idx) => {
      setTimeout(() => (this.props.fetchGameScore(NBATrial, game.id, NBAkey)), 1200 * idx)
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    if (this.props.sports.nba === undefined || this.props.sports.nhl === undefined ) {
      return null;
    } else {
      return (
        <div className="score-container">
          {/* <div>{this.mlbGameContainer()}</div> */}
          <div>{this.nbaGameContainer()}</div>
         <div>{this.nhlGameContainer()}</div>
        </div>
      );
    }
  }
}

export default Score;