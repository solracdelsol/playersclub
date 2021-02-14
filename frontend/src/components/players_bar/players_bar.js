import React from 'react';
import './players_bar.css';
import '../../reset.css';
import { Link } from 'react-router-dom';

const PlayersBar = ({ isAuthenticated, currentUser, openModal, logout }) => {
  let myStorage = window.localStorage;
  const processClick = e => {
    myStorage.setItem('nextPath', e.currentTarget.id);
    openModal('signup');
  };
  if (isAuthenticated) {
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
          <h6 className="welcome-player">
            Welcome to the Club, {currentUser.username}!
          </h6>
          <>
            <button onClick={() => openModal('preferences')} className="gear">
              <i className="fa fa-gear fa-2x"></i>
            </button>
            <button className="nav-logout" onClick={() => logout()}>
              Exit Club
            </button>
          </>
        </div>
      </>
    );
  } else {
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
          <button id="/teams" className="nav-btn" onClick={processClick}>
            Teams
          </button>
          <h5>
            <input
              id="/search"
              className="search"
              type="text"
              placeholder="Search the Club"
              onClick={processClick}
            ></input>
          </h5>
          <button id="/" className="nav-signup" onClick={processClick}>
            Join Club
          </button>
        </div>
      </>
    );
  }
};

export default PlayersBar;
