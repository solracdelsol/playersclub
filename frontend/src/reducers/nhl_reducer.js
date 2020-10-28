import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from "../actions/sport_actions";

const nhlReducer = (oldState = { sport: [], sports: [] }, action) => {
  // Object.freeze(oldState); // dont need this if we are using array default state
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState); //preserves oldState by making a copy we manipulate
  switch (action.type) {
    case RECEIVE_ONE:
      if (action.sport.config.url.split("/")[4] === "nhl") {
        newState.sport.push({
          home: action.sport.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
          away: action.sport.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
          scores: [action.sport.home_points, action.sport.away_points],
        }); // ARRAY OF POINTS, separate from home and away to normalize the object keys across all sports JSON

        return newState;
      } else {
        return oldState;
      }
    case RECEIVE_ALL:
      if (
        action.sports.data.hasOwnProperty("league") &&
        action.sports.data.league.alias === "NHL" &&
        action.sports.data.games !== undefined
      ) {
        //FINAL STATE LOOKS LIKE [ {home,away, [scores]}, {home, away, [scores]}, {home, away, [scores]} ]

        action.sports.data.games.forEach((game) =>
          newState.sports.push({
            id: game.id, //will allow us to key into the individual games
            scheduled: new Date(game.scheduled),
            title: game.title, // "Game 4"
            status: game.status,
            home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
            away: game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
            scores: [game.home_points, game.away_points], // ARRAY OF POINTS
          })
        );

        return newState;
      } else {
        return oldState;
      }
    case CLEAR_ALL:
      return { sport: [], sports: [] };

    default:
      return oldState;
  }
};

export default nhlReducer;
