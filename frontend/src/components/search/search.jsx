import React from "react";
import "./search.css";
import "../../reset.css";
import { Link } from "react-router-dom";
import ScoreCard from "../score/ScoreCard";
import Footer from "../footer/footer";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sportTrial: "nba", date: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearAll();
  }

  handleSubmit(e) {
    e.preventDefault();
    let newDate = this.state.date.split("-").join("/");
    this.props
      .scheduleObj(this.state.sportTrial, newDate)
      .then(() =>
        this.props.sports[this.state.sportTrial].sports.map((game, idx) => {
          if (game.status !== "unnecessary") {
            setTimeout(() => {
              this.props.fetchGameScore(this.state.sportTrial, game.id);
            }, 3000 * idx);
          }
        })
      )
      .catch((e) => console.log(e));
    this.props.clearAll();
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    const newScoreCard = this.props.sports[this.state.sportTrial].sport.map(
      (game) => {
        // if (
        //   this.state.sportTrial === "mlb" ||
        //   this.state.sportTrial === "nfl"
        // ) {
          return (
            <ScoreCard
              key={game.id}
              status={game.status}
              progress={game.progress}
              scheduled={game.scheduled}
              // homeName={game.home.market + " " + game.home.name}
              // awayName={game.away.market + " " + game.away.name}
              title={game.title}
              scores={game.scores}
              gameId={game.id}
            />
          );
        // } else {
        //   return (
        //     <ScoreCard
        //       key={game.id}
        //       status={game.status}
        //       scheduled={game.scheduled}
        //       progress={game.progress}
        //       homeName={game.home.name}
        //       awayName={game.away.name}
        //       title={game.title}
        //       scores={game.scores}
        //       gameId={game.id}
        //     />
        //   );
        // }
      }
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
          {this.props.sports.mlb.sport.length !== 0 ||
          this.props.sports.nba.sport.length === 0 ||
          this.props.sports.nfl.sport.length === 0 ||
          this.props.sports.nhl.sport.length === 0
            ? newScoreCard
            : null}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Search;
