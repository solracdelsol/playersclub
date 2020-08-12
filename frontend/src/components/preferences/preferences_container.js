import { connect } from 'react-redux';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';
import PreferencesForm from './preferences';

const msp = state => ({
  errors: state.errors.session,
  formType: "preferences"
})

const mdp = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(PreferencesForm);