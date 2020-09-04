import React from 'react';
import './score.css';
import '../../reset.css';
import { MLBkey, MLBTrial, NBATrial, NBAkey, NHLTrial, NHLkey  } from "../../config/src_keys"


class Score extends React.Component {
  constructor(props) {
    super(props);
    // this.mlbGameContainer = this.mlbGameContainer.bind(this);
    this.nhlGameContainer = this.nhlGameContainer.bind(this);
    this.nbaGameContainer = this.nbaGameContainer.bind(this);
    // this.fetchGame = this.fetchGame.bind(this);
  }

  mlbGameContainer() {
    
    return this.props.sports.mlb.map((gm, idx) => {
      return (
        <ul key={idx}>
          <li>{gm.game.home.name}</li>
          <li>{gm.scores[0] === undefined ? "pending" : gm.scores[0]}</li>
          <li>{gm.game.away.name}</li>
          <li>{gm.scores[1] === undefined ? "pending" : gm.scores[1]}</li>
        </ul>
      );
    });
  }


  nbaGameContainer() {
    return this.props.sports.nba.map((gm, idx) => {
      return (
        <ul key={idx}>
          <li>{gm.home.name}</li>
          <li>{gm.scores[0] === undefined ? "pending" : gm.scores[0]}</li>
          <li>{gm.away.name}</li>
          <li>{gm.scores[1] === undefined ? "pending" : gm.scores[1]}</li>
        </ul>
      );
    });
  }

  nhlGameContainer() {
    return this.props.sports.nhl.map((gm, idx) => { 
      return (
        <ul key={idx}>
          <li>{gm.home.name}</li>
          <li>{gm.scores[0] === undefined ? 'pending' : gm.scores[0]}</li>
          <li>{gm.away.name}</li>
          <li>{gm.scores[1] === undefined ? 'pending' : gm.scores[1]}</li>
        </ul>
      );
    });
  }

  // componentDidMount() {
  //   this.fetchGame()
    
  // }

  // fetchGame() {
 
  //   // this.props.sports.mlb.map((game, idx) => {
  //   //   setTimeout(() => (this.props.fetchGameScore(MLBTrial, game.id, MLBkey)), 1200 * idx)
  //   // });

  //   this.props.sports.nhl.map((game, idx) => {
  //     setTimeout(() => (this.props.fetchGameScore(NHLTrial, game.id, NHLkey)), 1200 * idx)
  //   });
    
  //   this.props.sports.nba.map((game, idx) => {
  //     setTimeout(() => (this.props.fetchGameScore(NBATrial, game.id, NBAkey)), 1200 * idx)
  //   });
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // debugger;
    
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