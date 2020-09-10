import React from 'react';
import './score.css';
import './team-logos.css'
import '../../reset.css';
import { MLBkey, MLBTrial, NBATrial, NBAkey, NHLTrial, NHLkey  } from "../../config/src_keys"


class Score extends React.Component {
  constructor(props) {
    super(props);
    this.mlbGameContainer = this.mlbGameContainer.bind(this);
    this.nhlGameContainer = this.nhlGameContainer.bind(this);
    this.nbaGameContainer = this.nbaGameContainer.bind(this);
    // this.fetchGame = this.fetchGame.bind(this);
  }

  mlbGameContainer() {
    
    return this.props.sports.mlb.map((gm, idx) => {
      return (
        <div className="scores" key={idx}>
          <p className="vs">VS</p>
          <div className="scores-away-container">
            <div className={gm.away.name.split(" ").join("-")}></div>
            <div className="scores-away">
              <p className="scores-away-team">Away: {gm.away.name}</p>
              <p className="scores-away-score">
                {gm.scores[1] === undefined ? "pending" : gm.scores[1]}
              </p>
            </div>
          </div>
          <div className="scores-home-container">
            <div className={gm.home.name.split(" ").join("-")}></div>
            <div className="scores-home">
              <p className="scores-home-team">Home: {gm.home.name}</p>
              <p className="scores-home-score">
                {gm.scores[0] === undefined ? "pending" : gm.scores[0]}
              </p>
            </div>
          </div>
        </div>
        // <ul key={idx}>
        //   <li>{gm.game.home.name}</li>
        //   <li>{gm.scores[0] === undefined ? "pending" : gm.scores[0]}</li>
        //   <li>{gm.game.away.name}</li>
        //   <li>{gm.scores[1] === undefined ? "pending" : gm.scores[1]}</li>
        // </ul>
      );
    });
  }


  nbaGameContainer() {
    return this.props.sports.nba.map((gm,idx) => {

      return (
        <div className="scores" key={idx}>
          <p className="vs">VS</p>
          <div className="scores-away-container">
            <div className={gm.away.name.split(" ").join("-")}></div>
            <div className="scores-away">
              <p className="scores-away-team">Away: {gm.away.name}</p>
              <p className="scores-away-score">
                {gm.scores[1] === undefined ? "pending" : gm.scores[1]}
              </p>
            </div>
          </div>
          <div className="scores-home-container">
            <div className={gm.home.name.split(" ").join("-")}></div>
            <div className="scores-home">
              <p className="scores-home-team">Home: {gm.home.name}</p>
              <p className="scores-home-score">
                {gm.scores[0] === undefined ? "pending" : gm.scores[0]}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  nhlGameContainer() {
    return this.props.sports.nhl.map((gm, idx) => { 
      return (
        <div className="scores" key={idx}>
          <p className="vs">VS</p>
          <div className="scores-away-container">
            <div className={gm.away.name.split(" ").join("-")}></div>
            <div className="scores-away">
              <p className="scores-away-team">Away: {gm.away.name}</p>
              <p className="scores-away-score">
                {gm.scores[1] === undefined ? "pending" : gm.scores[1]}
              </p>
            </div>
          </div>
          <div className="scores-home-container">
            <div className={gm.home.name.split(" ").join("-")}></div>
            <div className="scores-home">
              <p className="scores-home-team">Home: {gm.home.name}</p>
              <p className="scores-home-score">
                {gm.scores[0] === undefined ? "pending" : gm.scores[0]}
              </p>
            </div>
          </div>
        </div>
        // <ul key={idx}>
        //   <li>{gm.home.name}</li>
        //   <li>{gm.scores[0] === undefined ? 'pending' : gm.scores[0]}</li>
        //   <li>{gm.away.name}</li>
        //   <li>{gm.scores[1] === undefined ? 'pending' : gm.scores[1]}</li>
        // </ul>
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

    if (this.props.sports.nba === undefined || this.props.sports.nhl === undefined ) {
      return null;
    } else {
      return (
        <div className="score-container">
            <p className="score-header">Latest Scores</p>
            <div>{this.mlbGameContainer()}</div>
            {this.nbaGameContainer()}
            {this.nhlGameContainer()}
        </div>
      );
    }
  }
}


export default Score;