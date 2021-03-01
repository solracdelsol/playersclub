import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import './modal.css';
import '../../reset.css';
import PreferencesContainer from '../../components/preferences/preferences_container';

// Modal presentational and container component on same page
function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'preferences':
      component = <PreferencesContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

// mapping container to props to use above
const msp = state => ({
  modal: state.ui.modal,
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(Modal);
