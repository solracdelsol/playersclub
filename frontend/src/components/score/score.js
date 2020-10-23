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
        {this.props.sports.nfl.sports.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              scheduled={gm.scheduled}
              homeName={gm.home.name}
              awayName={gm.away.name}
              title={gm.title}
              scores={gm.scores}
            />
          );
        })}
        {this.props.sports.nba.sports.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              scheduled={gm.scheduled}
              homeName={gm.home.name}
              awayName={gm.away.name}
              title={gm.title}
              scores={gm.scores}
            />
          );
        })}
        {this.props.sports.nhl.sports.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              scheduled={gm.scheduled}
              homeName={gm.home.name}
              awayName={gm.away.name}
              title={gm.title}
              scores={gm.scores}
            />
          );
        })}
        {this.props.sports.mlb.sports.map((gm, idx) => {
          return (
            <ScoreCard
              key={idx}
              status={gm.status}
              scheduled={gm.scheduled}
              homeName={gm.home.market + " " + gm.home.name}
              awayName={gm.away.market + " " + gm.away.name}
              title={gm.title}
              scores={gm.scores}
              classNameAway={gm.away.name.split(" ").join("-")}
              classNameHome={gm.home.name.split(" ").join("-")}
            />
          );
        })}
      </div>
    );
  }
}

export default Score;
