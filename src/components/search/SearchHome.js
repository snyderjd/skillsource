import React, { Component } from 'react';
import './Search.css';
import SearchDataManager from './SearchDataManager';
import SkillDataManager from '../skills/SkillDataManager';
import { Button } from 'reactstrap';
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
                <div className="SearchHome-container">
                    <div className="SearchHome-logo-container">
                        <img src={require('./Logo.png')} alt="SkillSource Logo"/>
                    </div>
                    <div className="SearchHome-info">
                        <h1 className="SearchHome-info-heading">Welcome to SkillSource!</h1>
                        <p className="SearchHome-info-text">SkillSource is a way for users to plan, organize, and document their learning efforts! Design your own approach by creating a skill and adding resources to it (such as articles, videos, or online courses), or search the site to see what's already been added by other users. Feel free to browse the site by searching below, or log in/register to get started!</p>
                    </div>
                    <div className="SearchForm-input-container">
                        <input
                            className="searchInput"
                            type="text"
                            id="searchInput"
                            placeholder="Search for a skill that you would like to learn!"
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

