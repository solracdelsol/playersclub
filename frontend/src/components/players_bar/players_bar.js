import React from 'react';
import './players_bar.css';
import '../../reset.css';
import { Link } from 'react-router-dom';

class PlayersBar extends React.Component {
  render() {
    const { isAuthenticated, currentUser } = this.props;
    return (
      <>
        <div className="logo">
          <h1 className="logo-label">PlayersClub</h1>
        </div>
        <div className="nav-bar">
          <Link className="nav-btn" to="/">
            Home
          </Link>
          <h3 className="nav-btn">Sports</h3>
          <Link className="nav-btn" to="/teams">
            Teams
          </Link>
          <h5>
            <Link to="/search">
              <input
                className="search"
                type="text"
                placeholder="Search the Club"
              ></input>
            </Link>
          </h5>
          {isAuthenticated ? (
            <h6 className="welcome-player">
              Welcome to the Club, {currentUser.username}!
            </h6>
          ) : (
            ' '
          )}
          {isAuthenticated ? (
            <>
              <button
                onClick={() => this.props.openModal('preferences')}
                className="gear"
              >
                <i className="fa fa-gear fa-2x"></i>
              </button>
              <button
                className="nav-logout"
                onClick={() => this.props.logout()}
              >
                Exit Club
              </button>
            </>
          ) : (
            <button
              onClick={() => this.props.openModal('signup')}
              className="nav-signup"
            >
              Join Club
            </button>
          )}
        </div>
      </>
    );
  }
}

export default PlayersBar;
