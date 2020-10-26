import * as APIUTIL from "../util/sport_api_util";

export const RECEIVE_ONE = "RECEIVE_ONE";
export const RECEIVE_ALL = "RECEIVE_ALL";
export const CLEAR_ALL = "CLEAR_ALL";

export const receiveOne = (sport) => ({
  type: RECEIVE_ONE,
  sport,
});

export const receiveAll = (sports) => ({
  type: RECEIVE_ALL,
  sports,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});

export const fetchGameSchedule = (sportTrial, date, key) => (dispatch) =>
  APIUTIL.fetchGameSchedule(sportTrial, date, key).then((sports) =>
    dispatch(receiveAll(sports))
  );

export const fetchGameScore = (sportTrial, event_id) => (dispatch) =>
  APIUTIL.fetchGameScore(sportTrial, event_id).then((sport) =>
    dispatch(receiveOne(sport))
  );
