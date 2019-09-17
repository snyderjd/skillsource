import React, { Component } from 'react';
import { Button } from 'reactstrap';
import VideoDataManager from './VideoDataManager';
import VideoResult from './VideoResult';

class VideoSearch extends Component {
    state = {
        videoInput: "",
        videoResults: []
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    executeVideoSearch = (event) => {
        event.preventDefault();
        VideoDataManager.getVideos(this.state.videoInput).then(videos => {
            this.setState({ videoResults: videos.items })
        })
    }

    render() {
        console.log("VideoSearch", this.state);
        return (
            <React.Fragment>
                <div className="SearchForm-container">
                    <div className="SearchForm-input-container">
                        <label>Search for Videos</label>
                        <input 
                            className="searchInput"
                            type="text"
                            id="videoInput"
                            value={this.state.videoInput}
                            onChange={this.handleFieldChange}
                        />
                        <Button onClick={this.executeVideoSearch} color="success">Search</Button>
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
                </div>
            </React.Fragment>
        )
    }

}

export default VideoSearch;

