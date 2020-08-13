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
          <Link to='/search'>
          <input type="text" className="search" placeholder="Search"></input>
          </Link>
          <button
            onClick={() => this.props.openModal("signup")}
            className="nav-signup">
              Join the Club!
          </button>
          <button className="gear"><i className="fa fa-gear fa-lg"></i></button>
          <button className='nav-logout' onClick={() => this.props.logout()}>Exit Club</button>
        </div>
      </>
    );
  }
}

export default PlayersBar;
