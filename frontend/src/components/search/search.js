import React from "react";
import "./search.css";
import "../../reset.css";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { trial: "", eventId: "", key: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleSubmit(e) {
    e.preventDefault();
    
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
            <Link className="nav-btn-home" to="/">
              Home
            </Link>
            <label className="search-btn">Choose a Sport:</label>
            <select defaultValue={"DEFAULT"}>
              <option value="DEFAULT" disabled hidden>
                Sports
              </option>
              <option disabled value>
                Please select one
              </option>
              <option value="0">All</option>
              <option value="1">NBA</option>
              <option value="2">NHL</option>
              <option value="3">MLB</option>
            </select>
            <label className="search-btn">Select Date:</label>
            <input type="date"></input>
            <input className="submit" type="submit" value="Search" />
          </form>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Search;
