import React from 'react';
import { } from '';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { query: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllSports();
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchAllSports(this.state.query);
    }

    update(field) {
        return (e) =>
            this.setState({ [field]: e.target.value });
    }

    render() {
        return (
            <form
                className="search-form"
                onSubmit={this.handleSubmit}>
                <h1>search</h1>
                <input
                    className="sports-search"
                    type='search'
                    onChange={this.update('query')} />
            </form>
        );
    }
    
}



export default Search;