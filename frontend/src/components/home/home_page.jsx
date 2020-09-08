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
    this.getTodaysDate = this.getTodaysDate.bind(this);
  }


  componentDidMount(){
    if (Object.entries(this.props.sports.mlb).length === 0) {
      // this.props.mlbScheduleObj(this.getTodaysDate());
      setTimeout(() => this.props.nhlScheduleObj(this.getTodaysDate()), 1200);
      setTimeout(() => this.props.nbaScheduleObj(this.getTodaysDate()), 2400);
     }
  }

  getTodaysDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    return today = yyyy + "/" + mm + "/" + dd;
  }

  
  render() {

    const sportCard = () => {if (Object.entries(this.props.sports).length !== 0){ // gather all games and return them in SportsCard components
                Object.entries(this.props.sports).map( sport => {
                  return (<Score sports={sport}  />) })}}

    return (
      <div>
        <div className="homepage-container">
          <div className="homepage-background">
            <PlayersBar
              openModal={this.props.openModal}
              logout={this.props.logout}
              currentUser={this.props.currentUser}
              user={this.props.user}
            />
            <div className="information-container">
              <Article fetchArticles={this.props.fetchArticles} articles={this.props.articles} />
              {Object.entries(this.props.sports).length !== 0 ? (
                <Score sports={this.props.sports} />
              ) : null}
              {/* <Score /> */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;