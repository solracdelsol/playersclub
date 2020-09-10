import { connect } from "react-redux";
import React from "react";
import { login, signup, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";
import { demoUser } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Join the Club",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)), //added this
    otherForm: () => {
      return (
        <button
          className="session-btn"
          onClick={() => {
            dispatch(clearErrors());
            return dispatch(openModal("login"));
          }}
        >
          Login
        </button>
      );
    },
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    clearErrors: () => dispatch(clearErrors()),
    demoUser: () => dispatch(demoUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
