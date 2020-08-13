import { RECEIVE_ONE, RECEIVE_ALL, CLEAR_ALL } from '../actions/sport_actions';
import { urlencoded } from 'body-parser';


let gamesArr = [];

export default function SportsReducer (oldState = {}, action) {
  Object.freeze(oldState) 
  
  
  
  switch (action.type) {
    
    case RECEIVE_ONE:
      
      let newState = Object.assign({}, oldState, { [action.sport.headers["x-final-url"].split("/")[3]]: gamesArr } ); 
      newState[action.sport.headers["x-final-url"].split("/")[3]].push(
        action.sport
      );
      return newState;

    case RECEIVE_ALL: 
      return Object.assign( {}, oldState, { [action.sports.data.league.alias]: action.sports });
    
    case CLEAR_ALL: 
      return {};

    default:
      return oldState;
  }
}

