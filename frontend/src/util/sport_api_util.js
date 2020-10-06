import axios from 'axios';


export const fetchGameScore = (sportTrial, event_id, key) =>
  axios.get(
   `https://cors-anywhere.herokuapp.com/http://api.sportradar.us/${sportTrial}/en/games/${event_id}/boxscore.json?api_key=${key}`
);

export const fetchGameSchedule = (sportTrial, date, key) => {

  return axios.get(
    `/api/proxy/${sportTrial}`
    );
  }

