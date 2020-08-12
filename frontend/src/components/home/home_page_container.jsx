import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import {logout} from '../../actions/session_actions';
import HomePage from './home_page';
import { fetchAll } from '../../actions/sport_actions'

const msp = state => ({
  sports: state.sports
});


const mdp = (dispatch) =>  {return{
  openModal: (modal) => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
  fetchAll: (trial, event_id, key) => dispatch(fetchAll(trial, event_id, key))
}};

export default connect(msp, mdp)(HomePage);
