import React from "react";
import "./players_bar.css";
import "../../reset.css";
import { Link } from 'react-router-dom';

class PlayersBar extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <>
        <div className="logo">
          <h1 className="logo-label">PlayersClub</h1>
        </div>
        <div className="nav-bar">
          <Link className='nav-btn' to='/'>Home</Link>
          <h3 className="nav-btn">Sports</h3>
          <h4 className="nav-btn">Teams</h4>
          <h5 className="nav-btn">
          <Link to='/search'>
          <input className="search" type="text" placeholder="Search the Club"></input>
          </Link>
          </h5>
          <h6 className={this.props.currentUser ? "welcome-player" : "welcome-player1"}>
            Welcome to the Club, {this.props.user.username === 'undefined' ? "" : this.props.user.username}!
          </h6>
          <button
            onClick={() => this.props.openModal("signup")}
            className={this.props.currentUser ? "nav-signup" : "nav-signup2"}>
              Join the Club!
          </button>
          <button onClick={() => this.props.openModal("preferences")} className={this.props.currentUser ? "gear2" : "gear"}><i className="fa fa-gear fa-2x"></i></button>
          <button className={this.props.currentUser ? "nav-logout2" : "nav-logout"} onClick={() => this.props.logout()}>Exit Club</button>
        </div>
      </>
    );
  }
}

export default PlayersBar;
