import React from 'react';

function player_index({ fetchPlayerProfile, playerProfile, clearAll }) {
  if (Object.keys(playerProfile).length !== 0) {
    // let seasonsPlayed = playerProfile.seasons.map(season => )
    let teams = playerProfile.seasons.map(season =>
      season.teams.map(team => team.name)
    );
    let uniqueTeams = [...new Set(teams.flat())];
    return (
      <div>
        <h1>{playerProfile.full_name}</h1>
        <h3>Height:</h3>
        <p>{playerProfile.height}</p>
        <h3>Weight:</h3>
        <p>{playerProfile.weight}</p>
        <h3>Number:</h3>
        <p>{playerProfile.number}</p>
        <h3>Position:</h3>
        <p>{playerProfile.position}</p>
        <h3>Rookie Year:</h3>
        <p>{playerProfile.rookie_year}</p>
        <h3>Career:</h3>
        <h6>Seasons played: {playerProfile.seasons.length}</h6>
        <h6>Teams: {uniqueTeams.join(', ')}</h6>
      </div>
    );
  } else {
    return '';
  }
}

/*
birth_date: "1991-11-10"
birth_place: "Watts, CA, USA"
data: {id: "26414d70-d298-4999-a391-2eee2dd7067d", status: "ACT", full_name: "Tony Snell", first_name: "Tony", last_name: "Snell", …}
draft: {team_id: "583ec5fd-fb46-11e1-82cb-f4ce4684ea4c", year: 2013, round: "1", pick: "20"}
full_name: "Tony Snell"
height: 78
id: "26414d70-d298-4999-a391-2eee2dd7067d"
number: "19"
position: "G"
rookie_year: 2013
seasons: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
team: {id: "583ecb8f-fb46-11e1-82cb-f4ce4684ea4c", name: "Hawks", market: "Atlanta", alias: "ATL", sr_id: "sr:team:3423", …}
weight: 213
*/

export default player_index;
