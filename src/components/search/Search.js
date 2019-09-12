import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ResultList from './ResultList';

class Search extends Component {

    render() {
        return (
            <React.Fragment>
                <SearchForm {...this.props} />
                <ResultList {...this.props} />
            </React.Fragment>
        )
    }
}

export default Search;