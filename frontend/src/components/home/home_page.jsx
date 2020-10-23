import React from "react";
import "./home_page.css";
import "../../reset.css";
import PlayersBar from "../players_bar/players_bar";
import Footer from "../footer/footer";
import Article from "../article/article";
import Score from "../score/score";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.getTodaysDate = this.getTodaysDate.bind(this);
  }

  componentDidMount() {
    this.props.mlbScheduleObj(this.getTodaysDate());
    setTimeout(() => this.props.nhlScheduleObj(this.getTodaysDate()), 1200);
    setTimeout(() => this.props.nbaScheduleObj(this.getTodaysDate()), 2400);
    setTimeout(() => this.props.nflScheduleObj("2020"), 4800);
  }

  getTodaysDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    return (today = yyyy + "/" + mm + "/" + dd);
  }

  render() {
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
              <Article
                fetchArticles={this.props.fetchArticles}
                articles={this.props.articles}
              />
              {Object.entries(this.props.sports).length !== 0 ? (
                <Score
                  sports={this.props.sports}
                  fetchGameScore={this.props.fetchGameScore}
                />
              ) : null}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
