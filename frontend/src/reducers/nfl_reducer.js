import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from "../actions/sport_actions";

const nflReducer = (oldState = { sport: [], sports: [] }, action) => {
  // Object.freeze(oldState); // dont need this if we are using array default state
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState); //preserves oldState by making a copy we manipulate
  switch (action.type) {
    case RECEIVE_ONE:
      if (action.sport.config.url.split("/")[4] === "nfl") {
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
      if (action.sports.data.type === "REG") {
        //FINAL STATE LOOKS LIKE [ {home,away, [scores]}, {home, away, [scores]}, {home, away, [scores]} ]
        function getTodaysDate() {
          let today = new Date();
          let dd = String(today.getDate()).padStart(2, "0");
          let mm = String(today.getMonth() + 1).padStart(2, "0");
          let yyyy = today.getFullYear();
          return (today = yyyy + "-" + mm + "-" + dd);
        }
        action.sports.data.weeks.forEach((week) =>
          week.games.forEach((game) => {
            if (game.scheduled.split("T")[0] === getTodaysDate()) {
              newState.sports.push({
                game: game.id,
                scheduled: new Date(game.scheduled),
                // title: game.title, // "Game 4"
                status: game.status, // CHECK OTHER SPORTS TO SEE IF GAMES ARE NECESSARY
                home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
                away: game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
                scores: [game.scoring.home_points, game.scoring.away_points], // ARRAY OF POINTS
              });
            }
          })
        );

        return newState;
      } else {
        return oldState;
      }
    case CLEAR_ALL:
      return {};

    default:
      return oldState;
  }
};

export default nflReducer;
