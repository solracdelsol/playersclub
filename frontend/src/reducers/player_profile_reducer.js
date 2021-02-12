import { receivePlayerProfile, clearAll } from '../actions/sport_actions';

const playerProfileReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case receivePlayerProfile:
      action.playerProfile.config.url.split('/')[2] !== 'mlb'
        ? (newState = {
            data: action.playerProfile.data,
            id: action.playerProfile.data.id,
            full_name: action.playerProfile.data.full_name,
            height: action.playerProfile.data.height,
            weight: action.playerProfile.data.weight,
            position: action.playerProfile.data.position,
            number:
              action.playerProfile.data?.jersey_number ||
              action.playerProfile.data?.number,
            birth_place: action.playerProfile.data.birth_place,
            birth_date:
              action.playerProfile.data?.birth_date ||
              action.playerProfile.data?.birthdate,
            rookie_year: action.playerProfile.data.rookie_year,
            seasons: action.playerProfile.data.seasons,
            // league: action.playerProfile.data?.league.name || '',
            team: action.playerProfile.data.team,
            draft: action.playerProfile.data.draft,
          })
        : (newState = {
            data: action.playerProfile.data.player,
            id: action.playerProfile.data.player.id,
            full_name: action.playerProfile.data.player.full_name,
            height: action.playerProfile.data.player.height,
            weight: action.playerProfile.data.player.weight,
            position: action.playerProfile.data.player.position,
            // number:
            //   action.playerProfile.data.player?.jersey_number ||
            //   action.playerProfile.data.player?.number,
            birth_place: `${action.playerProfile.data.player.birthcity}, ${action.playerProfile.data.player.birthcountry}`,
            birth_date:
              action.playerProfile.data.player?.birth_date ||
              action.playerProfile.data.player?.birthdate,
            rookie_year: action.playerProfile.data.player.pro_debut,
            seasons: action.playerProfile.data.player.seasons,
            // league: action.playerProfile.data?.league.name || '',
            team: action.playerProfile.data.player.team,
            draft: action.playerProfile.data.player.draft,
          });
      return newState;
    //NFL example: name, market, venue.name, venue.capacity, division.name, conference.name, coaches || staff[full_name, position], players[name || full_name, jersey, position, birth_date || birthdate, weight, height]

    case clearAll:
      return {};

    default:
      return oldState;
  }
};

export default playerProfileReducer;
