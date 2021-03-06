import React from 'react';
import './home_page.css';
import '../../reset.css';
// import PlayersBar from '../players_bar/players_bar';
import Footer from '../footer/footer';
import Article from '../article/article';
import Score from '../score/score';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.getTodaysDate = this.getTodaysDate.bind(this);
  }

  componentDidMount() {
    let sportNames = ['mlb', 'nfl', 'nba', 'nhl'];

    sportNames.forEach(name => {
      return this.props
        .scheduleObj(name, this.getTodaysDate())
        .then(() =>
          this.props.sports[name].sports.forEach((game, idx) => {
            return setTimeout(() => {
              this.props.fetchGameScore(name, game.id);
            }, 1000 * idx);
          })
        )
        .catch(err => console.error(`Sorry! ${err.message}`));
    });
  }

  getTodaysDate() {
    // check if it's before noon and if so then return yesterday's games, otherwise today's
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    let day = today.getHours() > 11 ? today : yesterday;
    let dd = String(day.getDate()).padStart(2, '0');
    let mm = String(day.getMonth() + 1).padStart(2, '0');
    let yyyy = day.getFullYear();
    return `${yyyy}/${mm}/${dd}`;
  }

  render() {
    return (
      <>
        <div className="homepage-container">
          <div className="homepage-background">
            {/* <PlayersBar
              openModal={this.props.openModal}
              logout={this.props.logout}
              currentUser={this.props.currentUser}
              user={this.props.user}
            /> */}
            <div className="information-container">
              <Article
                fetchArticles={this.props.fetchArticles}
                articles={this.props.articles}
              />
              {Object.keys(this.props.sports).some(
                sportName => sportName.sport?.length !== 0
              ) ? (
                <Score sports={this.props.sports} />
              ) : null}
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
