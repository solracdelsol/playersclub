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
    const { sports } = this.props;
    let sportNames = ["mlb", "nfl", "nba", "nhl"];
    if (
      sports.mlb.sports.length !== 0 ||
      sports.nba.sports.length !== 0 ||
      sports.nfl.sports.length !== 0 ||
      sports.nhl.sports.length !== 0
    ) {
      return (
        <div className="score-container">
          <p className="score-header">Latest Scores</p>
          {sportNames.map((name) =>
            sports[name].sport.map((gm, idx) => {
              if (gm.status !== "postponed" && gm.status !== "unnecessary") {
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
                  />
                );
              } else {
                return null;
              }
            })
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Score;
