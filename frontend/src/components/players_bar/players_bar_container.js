import { connect } from 'react-redux';
import PlayersBar from './players_bar';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

const msp = state => ({
  sports: state.sports,
  currentUser: state.session.user,
  isAuthenticated: state.session.isAuthenticated,
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
});

export default connect(msp, mdp)(PlayersBar);
