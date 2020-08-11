import React from 'react';
import './home_page.css';
import '../../reset.css';

class HomePage extends React.Component {
  
  render() {
    return (
      <>
        <div className="homepage-background">
          <div className="logo">
            <h1 className="logo-label">PlayersClub</h1>
          </div>
          <div className="nav-bar">
            <h2 className="nav-btn">Home</h2>
            <h3 className="nav-btn">Sports</h3>
            <h4 className="nav-btn">Teams</h4>
            <h5 className="nav-btn">Sign In</h5>
          </div>
          <footer className="footer">Copyright 2020</footer>
        </div>
      </>
    );
  }
}
export default HomePage;