import React from "react";
import { withRouter } from "react-router-dom";
import './session.css';
import '../../reset.css';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // componentDidMount() {
  //   this.props.clearErrors();
  // }

  //IF NO ERRORS, SHOULD CLOSE MODAL, KEEP OPEN IF ERROR
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(()=>{
      
      if (this.props.formType === "Join the Club" && this.props.errors.length === 0){
        return this.props.openModal("preferences")
      // } else {
        // return this.props.closeModal;
      }

      // if(this.props.formType === "Enter") {
      //   this.props.processForm(user)
      // }}
      // ,
      // () => { if(!this.props.errors.session){ return this.props.closeModal}});
  })}
    
  //MAKES THE ERRORS RENDER ON SCREEN
  renderErrors() {
    return (
      <div>
        {Object.values(this.props.errors).map((error, i) => (
          <div className="errors" key={`error-${i}`}>{error}</div>
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
          <div className="session-form-caption">Welcome to PlayersClub</div>
          <div className="session-form-subcaption">
            {this.props.formType} or <p>{this.props.otherForm()}</p>
          </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div>{this.renderErrors()}</div>
          <div className="login-form">
            {this.props.formType === "Join the Club" ? (
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="login-input"
                placeholder="Username"
              />
              ) : null} 
            <input
              type="email"
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
           
            {this.props.formType === "Join the Club" ? (
             
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                className="login-input"
                placeholder="Confirm Password"
              />
            ) : null}
            <input
              className="login-final"
              type="submit"
              value={this.props.formType === 'Join the Club' ? "Join the Club" : this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
