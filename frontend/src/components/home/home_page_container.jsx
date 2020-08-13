import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import {logout} from '../../actions/session_actions';
import HomePage from './home_page';
import { fetchGameScore, fetchGameSchedule } from '../../actions/sport_actions';
import {
  MLBTrial,
  MLBkey,
  NBATrial,
  NBAkey,
  NHLTrial,
  NHLkey,
} from "../../src_keys";

const msp = state => { 
  return {
  sports: state.sports
} };


const mdp = (dispatch) =>  {
  return {
  openModal: (modal) => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  fetchGameScore: (sportTrial, event_id, key) => dispatch(fetchGameScore(sportTrial, event_id, key)),
  mlbScheduleObj: date => dispatch(fetchGameSchedule(MLBTrial, date, MLBkey)),
  nbaScheduleObj: date => dispatch(fetchGameSchedule(NBATrial, date, NBAkey)),
  nhlScheduleObj: date => dispatch(fetchGameSchedule(NHLTrial, date, NHLkey))
}};

export default connect(msp, mdp)(HomePage);
