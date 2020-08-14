import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from "../actions/sport_actions";

const mlbReducer = (oldState = [], action) => {
  debugger;
  Object.freeze(oldState);
  let copy = oldState.slice();
  switch (action.type) {
    case RECEIVE_ONE:
      if (action.sport.headers["x-final-url"].split("/")[3] === "mlb") {
        return Object.assign({}, oldState, action.sport);
      } else {
        return copy;
      }
    case RECEIVE_ALL: //SEE NHL TEMPLATE 
      if (action.sports.headers["x-final-url"].split("/")[3] === "mlb") {
        //ALL THESE WORK FOR ALL SPORTS NOW
        copy.push(// NOW NORMALIZE THE STATE
          {
            gamedata: action.sports, // GENERAL JSON INFO HERE, THIS IS VERY DIFFERENT FORMAT FROM THE OTHER TWO
            games:[// ALL GAMES STORED IN THIS ARRAY, AN ARRAY OF GAME OBJECTS------------------------------------
              {               
                home: action.sports.data.game.home, // FROM HERE YOU CAN CALL ANY HOME TEAM VALUE
                away: action.sports.data.game.away, // FROM HERE YOU CAN CALL ANY AWAY TEAM VALUE
                scores: [action.sports.data.game.home.runs,action.sports.data.game.away.runs,], // ARRAY OF POINTS
              },
            ],//------------------------------------------------------------------------------------------------------
          }
        );
        return copy; // this is a copy with the new object pushed to the end of the array, if you return a copy.push(), it will return the length of the new array
      } else {
        return copy; // else, return original array without pushing
      }
    case CLEAR_ALL:
      return {};
    default:
      return oldState;
  }
};

export default mlbReducer;
