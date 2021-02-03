import { receiveTeamProfile, clearAll } from '../actions/sport_actions';

const teamProfileReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch (action.type) {
    case receiveTeamProfile:
      newState = {
        data: action.teamProfile.data,
        id: action.teamProfile.data.id,
        name: action.teamProfile.data.name,
        market: action.teamProfile.data.market,
        coaches:
          action.teamProfile.data.coaches || action.teamProfile.data.staff,
        division: action.teamProfile.data.division.name,
        conference:
          action.teamProfile.data.conference?.name ||
          action.teamProfile.data.league.name,
        venueName: action.teamProfile.data.venue.name,
        venueCapacity: action.teamProfile.data.venue.capacity,
        roster: action.teamProfile.data.players,
        // league: action.teamProfile.data.league.name,
        sport: action.teamProfile.config.url.split('/')[3],
      };
      return newState;
    //NFL example: name, market, venue.name, venue.capacity, division.name, conference.name, coaches || staff[full_name, position], players[name || full_name, jersey, position, birth_date || birthdate, weight, height]

    case clearAll:
      return {};

    default:
      return oldState;
  }
};

export default teamProfileReducer;
