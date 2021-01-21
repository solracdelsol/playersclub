import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from "../actions/sport_actions";

const nbaReducer = (oldState = { sport: [], sports: [] }, action) => {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
  };
  const locale = navigator.language;
  // Object.freeze(oldState); // dont need this if we are using array default state
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState); //preserves oldState by making a copy we manipulate
  switch (action.type) {
    case RECEIVE_ONE:
      if (action.sport.config.url.split("/")[4] === "nba") {
        newState.sport.push({
          id: action.sport.data.id,
          scheduled: new Intl.DateTimeFormat(locale, options).format(
            new Date(action.sport.data.scheduled)
          ),
          status: action.sport.data.status,
          // progress: action.sport.data.quarter,
          home: action.sport.data.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
          away: action.sport.data.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
          scores: [
            action.sport.data.home.points,
            action.sport.data.away.points,
          ],
        }); // ARRAY OF POINTS, separate from home and away to normalize the object keys across all sports JSON

        return newState;
      } else {
        return oldState;
      }
    case RECEIVE_ALL:
      if (
        action.sports.data.hasOwnProperty("league") &&
        action.sports.data.league.alias === "NBA" &&
        action.sports.data.games !== undefined
      ) {
        //FINAL STATE LOOKS LIKE [ {home,away, [scores]}, {home, away, [scores]}, {home, away, [scores]} ]

        action.sports.data.games.forEach((game) => {
          return newState.sports.push({
            id: game.id,
            scheduled: new Intl.DateTimeFormat(locale, options).format(
              new Date(game.scheduled)
            ),
            title: game.title, // "Game 4"
            status: game.status, // CHECK OTHER SPORTS TO SEE IF GAMES ARE NECESSARY
            home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
            away: game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
            scores: [game.home_points, game.away_points], // ARRAY OF POINTS
          });
        });

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

export default nbaReducer;
