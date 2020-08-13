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
            <select className="test">
              <option value="" disabled selected hidden>Sports</option>
              <option disabled value>Please select one</option>
              <option value="0">All</option>
              <option value="1">NBA</option>
              <option value="2">NHL</option>
              <option value="3">MLB</option>
            </select>
          <label className="search-btn">Select Date:</label>
          <input type="date"></input>
          <input type="submit" value="Search"/>
        </form>
      </div>
    </div>
    );
  }
}



export default Search;