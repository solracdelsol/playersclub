import {connect} from 'react-redux';
import { openModal } from "../../actions/modal_actions";
import HomePage from './home_page';

const mdp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(null, mdp)(HomePage);
