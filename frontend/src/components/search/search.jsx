import React from "react";
import "./search.css";
import "../../reset.css";
import { Link } from "react-router-dom";
import ScoreCard from "../score/ScoreCard";
import Footer from "../footer/footer";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sportTrial: "", date: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    
  }

  handleSubmit(e) {
    e.preventDefault();
    let newDate = this.state.date.split("-").join("/");
    this.props.scheduleObj(this.state.sportTrial, newDate).then(() =>
      this.props.sports[this.state.sportTrial].sports.map((game, idx) => {
        console.log("fetching ...");
        setTimeout(() => {
          this.props.fetchGameScore(this.state.sportTrial, game.id);
        }, 1000 * idx);
      })
    ).catch(e => console.log(e));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    const newScoreCard = this.props.sports.mlb.sport.map((game) => {
        return (
          <ScoreCard
            key={game.id}
            status={game.status}
            progress={game.progress}
            scheduled={game.scheduled}
            homeName={game.home.market + " " + game.home.name}
            awayName={game.away.market + " " + game.away.name}
            title={game.title}
            scores={game.scores}
            classNameAway={game.away.name.split(" ").join("-")}
            classNameHome={game.home.name.split(" ").join("-")}
            gameId={game.id}
          />
        );
    });
    return (
      <div className="homepage-container">
        <div className="homepage-background">
          <div className="search-logo">
            <h1 className="search-logo-label">PlayersClub</h1>
          </div>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <Link className="nav-btn-home" to="/">
              Home
            </Link>
            <label className="search-btn">Choose a Sport:</label>
            <select
              defaultValue={"DEFAULT"}
              onChange={this.update("sportTrial")}
            >
              <option value="DEFAULT" disabled hidden>
                Sports
              </option>
              <option disabled value>
                Please select one
              </option>
              <option value="0">All</option>
              <option value="nba">NBA</option>
              <option value="nhl">NHL</option>
              <option value="mlb">MLB</option>
              <option value="nfl">NFL</option>
            </select>
            <label className="search-btn">Select Date:</label>
            <input type="date" onChange={this.update("date")}></input>
            <input className="submit" type="submit" value="Search" />
          </form>
          {this.props.sports.mlb.sport.length !== 0 ? newScoreCard : " "}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Search;
