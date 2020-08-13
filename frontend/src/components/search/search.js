import React from 'react';


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
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <h1>search</h1>
          <input
            placeholder="trial"
            className="sports-search"
            type="search"
            onChange={this.update("trial")}
          />
          <input
            placeholder="eventId"
            className="sports-search"
            type="search"
            onChange={this.update("eventId")}
          />
          <input
            placeholder="key"
            className="sports-search"
            type="search"
            onChange={this.update("key")}
          />

          <br></br>
          <br></br>
          <br></br>

          <label>Choose a sport:
            <select name="sport">
              <option value="nba">NBA</option>
              <option value="nhl">NHL</option>
              <option value="mlb">MLB</option>
            </select>
          </label>

          <br></br>

          <label>
            Date:
            <input type="date"></input>
          </label>

          <input type="submit" />
        </form>
      </div>
    );
  }
}



export default Search;