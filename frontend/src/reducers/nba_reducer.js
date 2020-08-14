import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from "../actions/sport_actions";


const nbaReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ONE:
      if (action.sport.headers["x-final-url"].split("/")[3] === 'nba'){
        return Object.assign({}, oldState, action.sport)
      }else{
        return oldState;
      }
    case RECEIVE_ALL:
      if (action.sports.headers["x-final-url"].split("/")[3] === 'nba'){ //ALL THESE WORK FOR ALL SPORTS NOW
        return Object.assign(
          {},
          oldState, // NOW NORMALIZE THE STATE
          {
            gamedata: action.sports, // GENERAL JSON INFO HERE
            games: [// ALL GAMES STORED IN THIS ARRAY, AN ARRAY OF GAME OBJECTS------------------------
              {
                home: action.sports.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
                away: action.sports.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
                scores: [action.sports.home.points, action.sports.away.points], // ARRAY OF POINTS
              },
            ], //------------------------------------------------------------------------------------
          }
        );}else{
        return oldState;
      }
    case CLEAR_ALL:
      return {};

    default:
      return oldState;
  }
};

export default nbaReducer;