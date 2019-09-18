import React, { Component } from 'react';
import './Search.css';
import SearchDataManager from './SearchDataManager';
import SkillDataManager from '../skills/SkillDataManager';
import { Button } from 'reactstrap';
import ResultCard from './ResultCard';
import HomeResult from './HomeResult';

class SearchHome extends Component {
    state = {
        searchInput: "",
        results: [],
        allSkills: []
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    executeSearch = (event) => {
        // Get skills from database based on search input, sort by timesCopied and store in state
        event.preventDefault();
        SearchDataManager.searchSkills(this.state.searchInput).then(skills => {
            skills.sort((a, b) => b.timesCopied - a.timesCopied) 
            this.setState({
                results: skills,
                allSkills: [],
            })
        })
    }

    browseAllSkills = (event) => {
        SkillDataManager.getAllSkills().then(allSkills => {
            allSkills.sort((a, b) => b.timesCopied - a.timesCopied)
            this.setState({
                allSkills: allSkills,
                results: []
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="SearchForm-container">
                    <div className="SearchHome-logo-container">
                        <img src={require('./Logo.png')} alt="SkillSource Logo"/>
                    </div>
                    <div className="SearchForm-input-container">
                        <input
                            className="searchInput"
                            type="text"
                            id="searchInput"
                            value={this.state.searchInput}
                            onChange={this.handleFieldChange}
                        />
                        <Button onClick={this.executeSearch} color="success">Search</Button>{' '}
                        <Button onClick={this.browseAllSkills} color="success">Browse All Skills</Button>
                    </div>
                    <div className="resultContainer">
                        {this.state.results.map(result =>
                            <HomeResult
                                key={result.id}
                                result={result}
                                {...this.props}
                            />
                        )}
                    </div>
                    <div className="resultContainer">
                        {this.state.allSkills.map(result =>
                            <HomeResult
                                key={result.id}
                                result={result}
                                {...this.props}
                            />
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchHome;

