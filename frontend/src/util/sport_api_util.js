import axios from 'axios';


export const fetchAll = (trial, event_id, key) =>
         axios.get(
           `https://cors-anywhere.herokuapp.com/http://api.sportradar.us/${trial}/en/games/${event_id}/boxscore.json?api_key=${key}`
         );


export const fetchOne = sport => (
  axios.get()
)
