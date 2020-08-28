<<<<<<< HEAD
// import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from '../actions/sport_actions';
import { combineReducers } from "redux";
import nhl from './nhl_reducer';
import nba from './nba_reducer';
import mlb from './mlb_reducer';
=======
import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from '../actions/sport_actions';
import { urlencoded } from 'body-parser';


let gamesArr = [];
>>>>>>> 7e2f8da0f3bc26cd2b845248d291d9f5baa0394b


// export default function SportsReducer (oldState = {}, action) {
//   Object.freeze(oldState) 
  
<<<<<<< HEAD
//   switch (action.type) {
    
//     case RECEIVE_ONE:
//       return Object.assign({}, oldState, { [action.sport.id]: action.sport });
    
//     case RECEIVE_ALL: 
//       return action.sports;
=======
  
  
  switch (action.type) {
    
    case RECEIVE_ONE:
      
      let newState = Object.assign({}, oldState, { [action.sport.headers["x-final-url"].split("/")[3]]: gamesArr } ); 
      newState[action.sport.headers["x-final-url"].split("/")[3]].push(
        action.sport
      );
      return newState;

    case RECEIVE_ALL: 
      return Object.assign( {}, oldState, { [action.sports.data.league.alias]: action.sports });
>>>>>>> 7e2f8da0f3bc26cd2b845248d291d9f5baa0394b
    
//     case CLEAR_ALL: 
//       return {};

//     default:
//       return oldState;
//   }
// }

const SportsReducer = combineReducers({
  mlb,
  nba,
  nhl,
});

export default SportsReducer;
