import React from 'react';
import './home_page.css';
import '../../reset.css';
import PlayersBar from '../players_bar/players_bar';
import Footer from '../footer/footer';
import Article from '../article/article';
import Score from '../score/score';



export default class HomePage extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    const trial = "mlb/trial/v6.6";
    // const date = 2020/08/12
    const event_id = "364c14ac-4862-42f0-a86c-4c78a366421d";
    const key = "tsnfm7psc9gpakapew4v3wby";

    this.props.fetchAll(trial, event_id, key);
  }

  
  render() {

    const sportCard = () => {if (Object.entries(this.props.sports).length !== 0){ // gather all games and return them in SportsCard components
                Object.entries(this.props.sports).map( sport => {
                  return (<Score sports={sport}  />) })}}

    return (
      <div>
        <div className="homepage-container">
          <div className="homepage-background">
            <PlayersBar openModal={this.props.openModal} logout={this.props.logout}/>
          <div className="information-container">
              
                  
                  
                {/* // <Article />, */}
          </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

// export default HomePage;