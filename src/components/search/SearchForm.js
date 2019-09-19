import React, { Component } from 'react';
import SearchDataManager from './SearchDataManager';
import { Button, Table } from 'reactstrap';
import ResultCard from './ResultCard';
import VideoResult from '../videos/VideoResult';
import WebResult from '../web/WebResult';
import VideoDataManager from '../videos/VideoDataManager';
import WebDataManager from '../web/WebDataManager';
import SkillDataManager from '../skills/SkillDataManager';
import UserDataManager from '../auth/UserDataManager';
import './Search.css';

class SearchForm extends Component {
    state = {
        searchInput: "",
        results: [],
        searchDomain: "",
        videoResults: [],
        webResults: [],
        allSkills: [],
        topCreators: []
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
                    webResults: [],
                    allSkills: []
                })
            })
        } else if (this.state.searchDomain === "videos") {
            VideoDataManager.getVideos(this.state.searchInput).then(videos => {
                this.setState({ 
                    videoResults: videos.items,
                    results: [],
                    webResults: [],
                    allSkills: []
                })
            })
        } else if (this.state.searchDomain === "web") {
            WebDataManager.getWebResults(this.state.searchInput).then(results => {
                this.setState({ 
                    webResults: results.items,
                    videoResults: [],
                    results: [],
                    allSkills: []
                })
            })
        } else {
            window.alert("Please select what you would like to search for.")
        }

    }

    browseAllSkills = (event) => {
        SkillDataManager.getAllSkills().then(allSkills => {
            allSkills.sort((a, b) => b.timesCopied - a.timesCopied)
            this.setState({
                allSkills: allSkills,
                results: [],
                videoResults: [],
                webResults: []
            })
        })
    }

    componentDidMount() {
        UserDataManager.getAllUsers().then(allUsers => {
            allUsers.sort((a, b) => b.timesCopied - a.timesCopied)
            
            this.setState({
                topCreators: allUsers
            })
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="SearchForm-parent-container">
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
                            <Button onClick={this.executeSearch} color="success">Search</Button>{' '}
                            <Button onClick={this.browseAllSkills} color="success">Browse All Skills</Button>
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
                        <div className="resultContainer">
                            {this.state.allSkills.map(result =>
                                <ResultCard
                                    key={result.id}
                                    result={result}
                                    {...this.props}
                                />
                            )}
                        </div>
                    </div>
                    {this.state.topCreators.length > 0 &&
                        <div className="TopCreators-container">
                            <h3 className="TopCreators-heading">Top Creators</h3>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Copied</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{this.state.topCreators[0].username}</td>
                                        <td>{this.state.topCreators[0].timesCopied}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>{this.state.topCreators[1].username}</td>
                                        <td>{this.state.topCreators[1].timesCopied}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>{this.state.topCreators[2].username}</td>
                                        <td>{this.state.topCreators[2].timesCopied}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>{this.state.topCreators[3].username}</td>
                                        <td>{this.state.topCreators[3].timesCopied}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>{this.state.topCreators[4].username}</td>
                                        <td>{this.state.topCreators[4].timesCopied}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    }
                </div>
            </React.Fragment>
            
        )
    }
    
}

export default SearchForm;