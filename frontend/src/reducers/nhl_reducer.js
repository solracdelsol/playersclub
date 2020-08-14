import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from "../actions/sport_actions";

const nhlReducer = (oldState = {}, action) => { // MAKE DEFAULT OLD STATE IN THE SHAPE RECEIVE_ALL format, USE THIS TEMPLATE FOR REFACTOR vvv
  Object.freeze(oldState);

  switch (action.type) { 
    case RECEIVE_ONE:
      if (action.sport.headers["x-final-url"].split("/")[3] === "nhl") {
        return Object.assign({}, oldState, action.sport);
      } else {
        return oldState;
      }
    case RECEIVE_ALL:
      if (action.sports.headers["x-final-url"].split("/")[3] === "nhl") {
        //ALL THESE WORK FOR ALL SPORTS NOW
        return Object.assign(
          {},
          oldState, // NOW NORMALIZE THE STATE
          {
            gamedata: action.sports, // GENERAL JSON INFO HERE
            games: action.sports.games.map(game =>{ // ALL GAMES STORED IN THIS OBJECT, AN ARRAY OF GAME OBJECTS------------------------ ^^^
              return  {  
                         
                home: game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
                away: game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
                scores: [game.home.points, game.away.points], // ARRAY OF POINTS
              }
             //----------------------------------------------------------------------------------
          })}
        );
      } else {
        return oldState;
      }
    case CLEAR_ALL:
      return {};

    default:
      return oldState;
  }
};

export default nhlReducer;
