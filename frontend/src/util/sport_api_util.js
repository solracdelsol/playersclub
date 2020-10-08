import axios from 'axios';


export const fetchGameScore = (sportTrial, event_id, key) => {
  return axios.get(
  `/api/proxy/scores/${sportTrial}/${event_id}`
  );
}

export const fetchGameSchedule = (sportTrial, date, key) => {

  return axios.get(
    `/api/proxy/${sportTrial}`
    );
  }

