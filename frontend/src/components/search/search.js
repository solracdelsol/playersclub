import React from 'react';
import './search.css';
import '../../reset.css';


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { trial: "",
                    eventId: "",
                    key: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const trial = "mlb/trial/v6.6";
    // const date = 2020/08/12
    const eventId = "364c14ac-4862-42f0-a86c-4c78a366421d";
    const key = "tsnfm7psc9gpakapew4v3wby";
    this.props.fetchAll(trial, eventId, key);
  }

  //mlb/trial/v6.6, 364c14ac-4862-42f0-a86c-4c78a366421d, tsnfm7psc9gpakapew4v3wby

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchAll(this.state.trial, this.state.eventId, this.state.key);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div className="homepage-container">
        <div className="homepage-background">
          <div className="search-logo">
            <h1 className="search-logo-label">PlayersClub</h1>
          </div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label className="search-btn">Choose a Sport:</label>
            <select name="sport">
              <option value="nba">NBA</option>
              <option value="nhl">NHL</option>
              <option value="mlb">MLB</option>
            </select>
          <label className="search-btn">Date:</label>
          <input type="date"></input>
          <input type="submit" value="Search"/>
        </form>
      </div>
    </div>
    );
  }
}



export default Search;