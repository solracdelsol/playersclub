import axios from 'axios';


export const fetchGameScore = (sportTrial, event_id, key) =>
  axios.get(
    `https://cors-anywhere.herokuapp.com/http://api.sportradar.us/${sportTrial}/en/games/${event_id}/boxscore.json?api_key=${key}`
);

export const fetchGameSchedule = (sportTrial, date, key) =>
  axios.get(
    `https://cors-anywhere.herokuapp.com/http://api.sportradar.us/${sportTrial}/en/games/${date}/schedule.json?api_key=${key}`
);



