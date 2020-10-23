import React from "react";

function ScoreCard({
  status,
  scheduled,
  homeName,
  awayName,
  title,
  scores,
  idx,
  classNameHome,
  classNameAway,
}) {
  if (status !== "unnecessary") {
    // this is to check if the game is actually happening
    return (
      <div className="scores" key={idx}>
        <div className="game-info">
          <p className="game-time">{scheduled.toString()}</p>
          <p className="game-number">{title}</p>
        </div>
        <p className="vs">VS</p>
        <div className="scores-away-container">
          <div
            className={
              classNameAway ? classNameAway : awayName.split(" ").join("-")
            }
          ></div>
          <div className="scores-away">
            <p className="scores-away-team">Away: {awayName}</p>
            <p className="scores-away-score">
              {scores[1] === undefined ? "pending" : scores[1]}
            </p>
          </div>
        </div>
        <div className="scores-home-container">
          <div
            className={
              classNameHome ? classNameHome : homeName.split(" ").join("-")
            }
          ></div>
          <div className="scores-home">
            <p className="scores-home-team">Home: {homeName}</p>
            <p className="scores-home-score">
              {scores[0] === undefined ? "pending" : scores[0]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
