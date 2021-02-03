import React from 'react';
import { Link } from 'react-router-dom';

function team_show_index({ teamProfile, fetchPlayerProfile }) {
  if (Object.keys(teamProfile).length !== 0) {
    let coach = teamProfile.coaches.map(coach => coach.full_name);
    let playerName = teamProfile.roster.map(player => {
      return (
        <Link to={`${teamProfile.sport}/players/${player.id}`} key={player.id}>
          <li
            onClick={() =>
              fetchPlayerProfile(teamProfile.sport.toLowerCase(), player.id)
            }
          >
            Name: {player?.name || player.full_name}, Position:{' '}
            {player.position}, Jersey Number:{' '}
            {player?.jersey_number || player.jersey}
          </li>
        </Link>
      );
    });
    return (
      <div>
        <h1>{teamProfile.market + ' ' + teamProfile.name}</h1>
        <h3>{coach.length > 1 ? 'Coaches' : 'Coach'}</h3>
        <p>{coach.join(', ')}</p>
        <h3>Venue</h3>
        <p>Name: {teamProfile.venueName}</p>
        <p>Capacity: {teamProfile.venueCapacity}</p>
        <h3>Roster</h3>
        <ul>{playerName}</ul>
        <h3>Conference</h3>
        <p>{teamProfile.conference}</p>
        <h3>Division</h3>
        <p>{teamProfile.division}</p>
      </div>
    );
  } else {
    return ' ';
  }
}

export default team_show_index;
