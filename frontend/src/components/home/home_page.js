import React from 'react';
import './home_page.css';
import '../../reset.css';
import PlayersBar from '../players_bar/players_bar';
import Footer from '../footer/footer';

class HomePage extends React.Component {
  
  render() {
    return (
      <>
        <div className="homepage-background">
          <PlayersBar />
          <Footer />
        </div>
      </>
    );
  }
}
export default HomePage;