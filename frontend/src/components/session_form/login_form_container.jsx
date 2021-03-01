import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';
import { demoUser } from '../../actions/session_actions';

const msp = state => ({
  errors: state.errors.session,
  formType: 'Enter',
});

const mdp = dispatch => ({
  processForm: user => dispatch(login(user)),
  login: user => dispatch(login(user)), //added this
  otherForm: () => {
    return (
      <button
        className="session-btn"
        onClick={() => {
          dispatch(clearErrors());
          return dispatch(openModal('signup'));
        }}
      >
        Join The Club
      </button>
    );
  },
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
  clearErrors: () => dispatch(clearErrors()),
  demoUser: () => dispatch(demoUser()),
});

export default connect(msp, mdp)(SessionForm);
