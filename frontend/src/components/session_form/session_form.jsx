import React from "react";
import { withRouter } from "react-router-dom";
import "./session.css";
import "../../reset.css";

import { openModal } from "../../actions/modal_actions";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  
  isEmpty(obj) {
    // Speed up calls to hasOwnProperty
    const hasOwnProperty = Object.prototype.hasOwnProperty;

      // null and undefined are "empty"
      if (obj == null) return true;

      // Assume if it has a length property with a non-zero value
      // that that property is correct.
      if (obj.length > 0)    return false;
      if (obj.length === 0)  return true;

      // If it isn't an object at this point
      // it is empty, but it can't be anything *but* empty
      // Is it empty?  Depends on your application.
      if (typeof obj !== "object") return true;

      // Otherwise, does it have any properties of its own?
      // Note that this doesn't handle
      // toString and valueOf enumeration bugs in IE < 9
      for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) return false;
      }

    return true;
  }

  //IF NO ERRORS, SHOULD CLOSE MODAL, KEEP OPEN IF ERROR
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      () => {
        if (this.props.formType === "signup" && this.isEmpty(this.props.errors.session)) {
          return this.props.openModal("preferences");
        } else {
          return this.props.closeModal;
        }
      },
      () => {
        if (!this.props.errors.session) {
          return this.props.closeModal;
        }
      }
    );
  }

  //MAKES THE ERRORS RENDER ON SCREEN
  renderErrors() {
    return (
      <div>
        {Object.values(this.props.errors).map((error, i) => (
          <div className="errors" key={`error-${i}`}>
            {error}
          </div>
        ))}
      </div>
    );
  }

  // openPrefs(){
  //   return (this.props.formType === 'signup' () => openModal('preferences') : null);
  // }

  render() {
    return (
      <div className="login-form-container">
        <div onClick={this.props.closeModal} className="close-x">
          X
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="session-form-caption">Welcome to PlayersClub</div>
          <div className="session-form-subcaption">
            Please {this.props.formType} or <p>{this.props.otherForm()}</p>
          </div>
          {this.renderErrors()}
          <div className="login-form">
            {this.props.formType === "signup" ? (
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder="Username"
              />
            ) : null}
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
              placeholder="Email"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
              placeholder="Password"
            />

            {this.props.formType === "signup" ? (
              <input
                type="password2"
                value={this.state.password2}
                onChange={this.update("password2")}
                className="login-input"
                placeholder="Confirm Password"
              />
            ) : null}
            <input
              className="login-final"
              type="submit"
              value={
                this.props.formType === "signup"
                  ? "Join the Club"
                  : this.props.formType
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
