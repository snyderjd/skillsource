import React, { Component } from 'react';
import SearchDataManager from './SearchDataManager';
import { Button } from 'reactstrap';
import ResultCard from './ResultCard';

class SearchForm extends Component {
    state = {
        searchInput: "",
        results: []
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    // Call function to search skills with the input from state and save results to state
    executeSearch = (event) => {
        event.preventDefault();
        SearchDataManager.searchSkills(this.state.searchInput).then(skills => {
            console.log(skills);
            this.setState({ results: skills })
        })

    }

    render() {
        console.log("searchForm", this.state)
        return (
            <React.Fragment>
                <div className="searchContainer">
                    <label>Search for Items</label>
                    <input
                        className="searchInput"
                        type="text"
                        id="searchInput"
                        value={this.state.searchInput}
                        onChange={this.handleFieldChange}
                    />
                    <Button onClick={this.executeSearch}>Search</Button>
                </div>
                <div className="resultContainer">
                        {this.state.results.map(result =>
                            <ResultCard
                                key={result.id}
                                result={result}
                                {...this.props}
                            />
                        )}
                </div>
            </React.Fragment>
            
        )
    }
    
}

export default SearchForm;