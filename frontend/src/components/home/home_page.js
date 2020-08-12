import React from 'react';
import './home_page.css';
import '../../reset.css';
import PlayersBar from '../players_bar/players_bar';
import Footer from '../footer/footer';
import Article from '../article/article';
import Score from '../score/score';



class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.openModal('signup');
  // }
  
  render() {
    return (
      <>
        <div className="homepage-container">
          <div className="homepage-background">
            <PlayersBar openModal={this.props.openModal} logout={this.props.logout}/>
          <div className="information-container">
            <Article />
            <Score />
          </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;


