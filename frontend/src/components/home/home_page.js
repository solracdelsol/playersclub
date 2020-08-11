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
        <footer className="footer">Copyright 2020</footer>
      </div>
      </>
    );
  }
}
export default HomePage;