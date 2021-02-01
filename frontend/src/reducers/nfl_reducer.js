import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from '../actions/sport_actions';

const nflReducer = (oldState = { sport: [], sports: [] }, action) => {
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
      if (action.sport.config.url.split('/')[4] === 'nfl') {
        newState.sport.push({
          id: action.sport.data.id,
          scheduled: Intl.DateTimeFormat(locale, options).format(
            new Date(action.sport.data.scheduled)
          ),
          status: action.sport.data.status,
          progress: `Quarter: ${action.sport.data.quarter} Clock: ${action.sport.data.clock}`,
          home: action.sport.data.summary.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
          away: action.sport.data.summary.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
          scores: [
            action.sport.data.summary.home.points,
            action.sport.data.summary.away.points,
          ],
        }); // ARRAY OF POINTS, separate from home and away to normalize the object keys across all sports JSON

        return newState;
      } else {
        return oldState;
      }
    case RECEIVE_ALL:
      if (action.sports.data.type === 'REG') {
        //FINAL STATE LOOKS LIKE [ {home,away, [scores]}, {home, away, [scores]}, {home, away, [scores]} ]
        function getTodaysDate() {
          let today = new Date();
          let dd = String(today.getDate()).padStart(2, '0');
          let mm = String(today.getMonth() + 1).padStart(2, '0');
          let yyyy = today.getFullYear();
          return (today = yyyy + '-' + mm + '-' + dd);
        }
        action.sports.data.weeks.forEach(week =>
          week.games.forEach(game => {
            if (
              game.scheduled.split('T')[0] === getTodaysDate() &&
              game.status === 'closed'
            ) {
              newState.sports.push({
                id: game.id,
                scheduled: Intl.DateTimeFormat(locale, options).format(
                  new Date(game.scheduled)
                ),
                // title: game.title, // "Game 4"
                status: game.status, // CHECK OTHER SPORTS TO SEE IF GAMES ARE NECESSARY
                home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
                away: game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
                venue: game.venue, // Venue
              });
            } else if (game.scheduled.split('T')[0] === getTodaysDate()) {
              newState.sports.push({
                id: game.id,
                scheduled: new Date(game.scheduled),
                // title: game.title, // "Game 4"
                status: game.status, // CHECK OTHER SPORTS TO SEE IF GAMES ARE NECESSARY
                home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
                away: game.away,
                venue: game.venue, // VENUE
              });
            }
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

export default nflReducer;
