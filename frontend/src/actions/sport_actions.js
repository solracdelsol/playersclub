import * as APIUTIL from '../util/sport_api_util';

export const RECEIVE_ONE = 'RECEIVE_ONE';
export const RECEIVE_ALL = "RECEIVE_ALL";
export const CLEAR_ALL = 'CLEAR_ALL';

export const recieveOne = sport => ({
  type: RECEIVE_ONE,
  sport
});

export const recieveAll = sports => ({
  type: RECEIVE_ALL,
  sports
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export const fetchGameSchedule = (sportTrial, date, key) => dispatch => (
  APIUTIL.fetchGameSchedule(sportTrial, date, key)
    .then(sports => dispatch(recieveAll(sports)))
);

export const fetchGameScore = (sportTrial, event_id, key) => dispatch => (
  APIUTIL.fetchGameScore(sportTrial, event_id, key)
    .then(sport => dispatch(recieveOne(sport)))
)