import React from 'react';
import './players_bar.css';
import '../../reset.css';


class PlayersBar extends React.Component {
    render() {
        return (
          <>
            <div className="logo">
              <h1 className="logo-label">PlayersClub</h1>
            </div>
            <div className="nav-bar">
              <h2 className="nav-btn">Home</h2>
              <h3 className="nav-btn">Sports</h3>
              <h4 className="nav-btn">Teams</h4>
              <input
                type="text"
                className="search"
                placeholder="Search"
              ></input>
              <h5 className="nav-btn">
                Sign In<i id="gear" className="fa fa-gear"></i>
              </h5>
            </div>
          </>
        );
    }
}

export default PlayersBar;