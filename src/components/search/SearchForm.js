import React, { Component } from 'react';
import SearchDataManager from './SearchDataManager';
import { Button } from 'reactstrap';
import ResultCard from './ResultCard';
import VideoResult from '../videos/VideoResult';
import WebResult from '../web/WebResult';
import VideoDataManager from '../videos/VideoDataManager';
import WebDataManager from '../web/WebDataManager';
import './Search.css';

class SearchForm extends Component {
    state = {
        searchInput: "",
        results: [],
        searchDomain: "",
        videoResults: [],
        webResults: []
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    // Call function to search skills with the input from state and save results to state
    executeSearch = (event) => {
        event.preventDefault();

        if (this.state.searchDomain === "skills") {
            SearchDataManager.searchSkills(this.state.searchInput).then(skills => {
                skills.sort((a, b) => b.timesCopied - a.timesCopied)
                this.setState({ 
                    results: skills,
                    videoResults: [],
                    webResults: []
                })
            })
        } else if (this.state.searchDomain === "videos") {
            VideoDataManager.getVideos(this.state.searchInput).then(videos => {
                this.setState({ 
                    videoResults: videos.items,
                    results: [],
                    webResults: []
                })
            })
        } else if (this.state.searchDomain === "web") {
            WebDataManager.getWebResults(this.state.searchInput).then(results => {
                this.setState({ 
                    webResults: results.items,
                    videoResults: [],
                    results: []
                })
            })
        } else {
            window.alert("Please select what you would like to search for.")
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="SearchForm-container">
                    <div className="SearchForm-input-container">
                        <label htmlFor="type">Search For</label>
                        <select
                            id="searchDomain"
                            value={this.state.searchDomain}
                            className="VideoModal-input"
                            onChange={this.handleFieldChange}
                        >
                            <option>Select</option>
                            <option key="skills" value="skills">Skills</option>
                            <option key="videos" value="videos">Videos</option>
                            <option key="web" value="web">Web Content</option>
                        </select>
                        <input
                            className="searchInput"
                            type="text"
                            id="searchInput"
                            value={this.state.searchInput}
                            onChange={this.handleFieldChange}
                        />
                        <Button onClick={this.executeSearch} color="success">Search</Button>
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
                    <div className="resultContainer">
                        {this.state.videoResults.map(video =>
                            <VideoResult
                                key={video.id.videoId}
                                video={video}
                                {...this.props}
                            />
                        )}
                    </div>
                    <div className="resultContainer">
                        {this.state.webResults.map(result =>
                            <WebResult
                                key={result.cacheId}
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

export default SearchForm;