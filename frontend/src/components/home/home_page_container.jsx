import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import {logout} from '../../actions/session_actions';
import HomePage from './home_page';
import { fetchGameScore, fetchGameSchedule } from '../../actions/sport_actions';
<<<<<<< HEAD
import {
  MLBTrial,
  MLBkey,
  NBATrial,
  NBAkey,
  NHLTrial,
  NHLkey,
} from "../../config/src_keys";
=======
// import {
//   MLBTrial,
//   MLBkey,
//   NBATrial,
//   NBAkey,
//   NHLTrial,
//   NHLkey,
// } from "../../src_keys";


const msp = state => ({

  mlb: state.sports.mlb,
  nba: state.sports.nba,
  nhl: state.sports.nhl,
  sports: state.sports,
  currentUser: state.session.isAuthenticated,
  user: state.session.user
});
>>>>>>> e8a555cfe2d27dc0105016ea9ad2e3e477e292e5



const mdp = (dispatch) =>  {
  return {
  openModal: (modal) => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  // fetchGameScore: (sportTrial, event_id, key) => dispatch(fetchGameScore(sportTrial, event_id, key)),
  // mlbScheduleObj: date => dispatch(fetchGameSchedule(MLBTrial, date, MLBkey)),
  // nbaScheduleObj: date => dispatch(fetchGameSchedule(NBATrial, date, NBAkey)),
  // nhlScheduleObj: date => dispatch(fetchGameSchedule(NHLTrial, date, NHLkey))
}};

export default connect(msp, mdp)(HomePage);
