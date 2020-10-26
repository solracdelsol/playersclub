import React from "react";
import "./score.css";
import "./team-logos.css";
import "../../reset.css";
import ScoreCard from "./ScoreCard";

class Score extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="score-container">
        <p className="score-header">Latest Scores</p>
        {this.props.sports.nfl.sport.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              scheduled={gm.scheduled}
              progress={gm.progress}
              homeName={gm.home.market + " " + gm.home.name}
              awayName={gm.away.market + " " + gm.away.name}
              title={gm.title}
              scores={gm.scores}
              gameId={gm.id}
              fetchGameScore={this.props.fetchGameScore}
            />
          );
        })}
        {this.props.sports.nba.sport.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              scheduled={gm.scheduled}
              progress={gm.progress}
              homeName={gm.home.name}
              awayName={gm.away.name}
              title={gm.title}
              scores={gm.scores}
              fetchGameScore={this.props.fetchGameScore}
              gameId={gm.id}
            />
          );
        })}
        {this.props.sports.nhl.sport.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              scheduled={gm.scheduled}
              progress={gm.progress}
              homeName={gm.home.name}
              awayName={gm.away.name}
              title={gm.title}
              scores={gm.scores}
              gameId={gm.id}
              fetchGameScore={this.props.fetchGameScore}
            />
          );
        })}
        {this.props.sports.mlb.sport.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              progress={gm.progress}
              scheduled={gm.scheduled}
              homeName={gm.home.market + " " + gm.home.name}
              awayName={gm.away.market + " " + gm.away.name}
              title={gm.title}
              scores={gm.scores}
              classNameAway={gm.away.name.split(" ").join("-")}
              classNameHome={gm.home.name.split(" ").join("-")}
              gameId={gm.id}
              fetchGameScore={this.props.fetchGameScore}
            />
          );
        })}
      </div>
    );
  }
}

export default Score;
