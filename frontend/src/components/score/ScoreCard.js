import React from 'react';

function ScoreCard({
  status,
  scheduled,
  homeName,
  awayName,
  title,
  scores,
  idx,
  progress,
}) {
  if (status !== 'unnecessary' || status !== 'postponed') {
    /*this is to check if the game is actually happening */
    return (
      <div className="scores" key={idx}>
        <div className="game-info">
          <p className="game-time">{scheduled}</p>
          <p className="game-status">
            {status === 'inprogress'
              ? progress // if the game is in progress there's quarter and clock we have access to
              : status === 'closed' || status === 'complete' // else it's closed or complete we can return 'final'
              ? 'Final'
              : `Start: ${scheduled.split(' ').slice(-2).join(' ')}`}
          </p>
          <p className="game-number">{title}</p>
        </div>
        <p className="vs">VS</p>
        <div className="scores-away-container">
          <div className={awayName.split(' ').join('-')}></div>
          <div className="scores-away">
            <p className="scores-away-team">Away: {awayName}</p>
            <p className="scores-away-score">
              {status === 'scheduled' ||
              status === 'created' ||
              scores[1] === undefined
                ? ' '
                : scores[1]}
            </p>
          </div>
        </div>
        <div className="scores-home-container">
          <div className={homeName.split(' ').join('-')}></div>
          <div className="scores-home">
            <p className="scores-home-team">Home: {homeName}</p>
            <p className="scores-home-score">
              {status === 'scheduled' ||
              status === 'created' ||
              scores[0] === undefined
                ? ' '
                : scores[0]}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreCard;
