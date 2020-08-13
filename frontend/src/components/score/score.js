import React from 'react';
import './score.css';
import '../../reset.css';
import { MLBkey, MLBTrial, NBATrial, NBAkey, NHLTrial, NHLkey  } from '../../src_keys';


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.mlbGameContainer = this.mlbGameContainer.bind(this);
    this.gameContainer = this.gameContainer.bind(this);
  }

  mlbGameContainer() {

    return this.props.sports.mlb.map((gm,idx) => {
    return (
      <ul>
        <li>{this.props.sports.mlb[idx].data.game.home.name}</li>
        <li>{this.props.sports.mlb[idx].data.game.home.runs}</li>
        <li>{this.props.sports.mlb[idx].data.game.away.name}</li>
        <li>{this.props.sports.mlb[idx].data.game.away.runs}</li>
        <li>{this.props.sports.mlb[idx].data.game.venue.name}</li>
      </ul>
    );});
  };

  gameContainer(gameObject) { 
    return gameObject.map(game => {
    return (
      <ul>
        <li>{game.data.game.home.name}</li>
        <li>{game.data.game.home.points}</li>
        <li>{game.data.game.away.name}</li>
        <li>{game.data.game.away.points}</li>
      </ul>
    )});
  };


render() {
    // const gameObject2 = this.props.sports.NBA.data.games.map( game =>
    //   this.props.fetchGameScore(NBATrial, game.id, NBAkey)
    // );
    // const gameObject3 = this.props.sports.NHL.data.games.map( game =>
    //   this.props.fetchGameScore(NHLTrial, game.id, NHLkey)
    // );
    if (typeof this.props.sports.mlb !== Array) {
        return this.props.sports.MLB.data.games.map( game => 
            {
            return null;

            // setInterval(() => this.props.fetchGameScore(MLBTrial, game.id, MLBkey), 30000)
        });
      } else {
        return (
        <div className="score-container">
          <div>{this.mlbGameContainer()}</div>
          <div>{this.gameContainer(this.props.sports.NBA)}</div>
          <div>{this.gameContainer(this.props.sports.NHL)}</div>
        </div>
      );
    }
  }
}

export default Score;