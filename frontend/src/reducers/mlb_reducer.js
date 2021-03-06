import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from '../actions/sport_actions';

const mlbReducer = (oldState = { sport: [], sports: [] }, action) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };

  const locale = navigator.language;
  // Object.freeze(oldState); // dont need this if we are using array default state
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState); //preserves oldState by making a copy we manipulate
  switch (action.type) {
    case RECEIVE_ONE:
      if (action.sport.config.url.split('/')[4] === 'mlb') {
        newState.sport.push({
          id: action.sport.data.game.id,
          scheduled: Intl.DateTimeFormat(locale, options).format(
            new Date(action.sport.data.game.scheduled)
          ),
          status: action.sport.data.game.status,
          // progress: action.sport.data.game.outcome.current_inning,
          home: action.sport.data.game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
          away: action.sport.data.game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
          scores: [
            action.sport.data.game.home.runs,
            action.sport.data.game.away.runs,
          ],
        }); // ARRAY OF POINTS, separate from home and away to normalize the object keys across all sports JSON

        return newState;
      } else {
        return oldState;
      }
    case RECEIVE_ALL:
      if (
        action.sports.data.hasOwnProperty('league') &&
        action.sports.data.league.alias === 'MLB' &&
        action.sports.data.games !== undefined
      ) {
        //FINAL STATE LOOKS LIKE [ {home,away, [scores]}, {home, away, [scores]}, {home, away, [scores]} ]

        action.sports.data.games.forEach(game =>
          newState.sports.push({
            scheduled: Intl.DateTimeFormat(locale, options).format(
              new Date(game.scheduled)
            ),
            id: game.id,
            title: game.ps_round, // "NLWC" THIS KEY IS ONLY AVAILABLE DURING THE PLAYOFFS
            status: game.status, // CHECK OTHER SPORTS TO SEE IF GAMES ARE NECESSARY
            home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
            away: game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
            venue: game.venue.name, // venue
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

export default mlbReducer;
