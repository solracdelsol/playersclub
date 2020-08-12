import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import {logout} from '../../actions/session_actions';
import HomePage from './home_page';

const mdp = (dispatch) =>  {return{
  openModal: (modal) => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
}};

export default connect(null, mdp)(HomePage);
