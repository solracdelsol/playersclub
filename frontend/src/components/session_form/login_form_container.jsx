import { connect } from 'react-redux';
import React from 'react';
import {login, clearErrors} from '../../actions/session_actions'
import { openModal, closeModal  } from '../../actions/modal_actions';
import SessionForm from './session_form';

const msp = state =>({
  errors: state.errors.session,
  formType: 'login'
})

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  otherForm: () => { 
     return (<button onClick={() => {dispatch(clearErrors()); return dispatch(openModal("signup"))}}>Join The Club</button>
)},
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(msp, mdp)(SessionForm);