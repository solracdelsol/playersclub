import React from "react";
import "./search.css";
import "../../reset.css";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import ScoreCard from "../score/ScoreCard";
import Footer from "../footer/footer";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sportTrial: "nba",
      date: "",
      loading: false, // will use this to implement a loading spinner
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearAll();
  }

  componentWillUnmount() {
    // temporary solution until we can figure out how to cancel network requests that have not been fulfilled reason why? if a person creates a search and all the data is not in our state and we go to the home page we will see the data that is being returned
    this.props.clearAll();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      document.querySelector(".dateSelector").value === "" ||
      document.querySelector(".options").value === "DEFAULT"
    ) {
      this.setState({ loading: false });
      return "";
    }

    this.setState({ loading: true });
    let newDate = this.state.date.split("-").join("/");
    this.props
      .scheduleObj(this.state.sportTrial, newDate)
      .then(() => {
        return this.props.sports[this.state.sportTrial].sports.map(
          (game, idx) => {
            if (game.status !== "unnecessary" && game.status !== "postponed") {
              setTimeout(() => {
                this.props.fetchGameScore(this.state.sportTrial, game.id);
              }, 3000 * idx);
            }
          }
        );
      })
      .catch((e) => console.log(e));
    this.props.clearAll();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    const newScoreCard = this.props.sports[this.state.sportTrial].sport.map(
      (game) => {
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
            gameId={game.id}
          />
        );
      }
    );
    // this is a temporary fix until we can style a card to display a message upon hitting the search page
    const message = (
      <div className="loading">
        <h3>
          Please select a sport and date!!
          {this.state.loading === false ? (
            " "
          ) : (
            <Loader
              type="Oval"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={15000}
            />
          )}
        </h3>
      </div>
    );
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
              className="options"
              defaultValue={"DEFAULT"}
              onChange={this.update("sportTrial")}
            >
              <option value="DEFAULT" disabled hidden>
                Sports
              </option>
              <option disabled value>
                Please select one
              </option>
              {/* <option value="0" disabled value>
                All (coming soon)
              </option> */}
              <option value="nba">NBA</option>
              <option value="nhl">NHL</option>
              <option value="mlb">MLB</option>
              {/* <option value="nfl" disabled value>
                NFL (coming soon)
              </option> */}
            </select>
            <label className="search-btn">Select Date:</label>
            <input
              className="dateSelector"
              type="date"
              onChange={this.update("date")}
            ></input>
            <input className="submit" type="submit" value="Search" />
          </form>
          <div className="score-container-search">
            {this.props.sports.mlb.sport.length !== 0 ||
            this.props.sports.nba.sport.length !== 0 ||
            this.props.sports.nfl.sport.length !== 0 ||
            this.props.sports.nhl.sport.length !== 0
              ? newScoreCard
              : message}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Search;
