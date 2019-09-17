import React, { Component } from 'react';
import { Button } from 'reactstrap';
import WebDataManager from './WebDataManager';
import WebResult from './WebResult'

class WebSearch extends Component {
    state = {
        webInput: "",
        webResults: []
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    executeWebSearch = (event) => {
        event.preventDefault();
        WebDataManager.getWebResults(this.state.webInput).then(results => {
            this.setState({ webResults: results.items })
        })

    }

    // executeVideoSearch = (event) => {
    //     event.preventDefault();
    //     VideoDataManager.getVideos(this.state.videoInput).then(videos => {
    //         this.setState({ videoResults: videos.items })
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <div className="SearchForm-container">
                    <div className="SearchForm-input-container">
                        <label>Search the Web</label>
                        <input 
                            className="searchInput"
                            type="text"
                            id="webInput"
                            value={this.state.videoInput}
                            onChange={this.handleFieldChange}
                        />
                        <Button onClick={this.executeWebSearch} color="success">Search</Button>
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

//     render() {
//         console.log("VideoSearch", this.state);
//         return (
//             <React.Fragment>
//                 <div className="SearchForm-container">
//                     <div className="SearchForm-input-container">
//                         <label>Search for Videos</label>
//                         <input
//                             className="searchInput"
//                             type="text"
//                             id="videoInput"
//                             value={this.state.videoInput}
//                             onChange={this.handleFieldChange}
//                         />
//                         <Button onClick={this.executeVideoSearch} color="success">Search</Button>
//                     </div>
//                     <div className="resultContainer">
//                         {this.state.videoResults.map(video =>
//                             <VideoResult
//                                 key={video.id.videoId}
//                                 video={video}
//                                 {...this.props}
//                             />
//                         )}
//                     </div>
//                 </div>
//             </React.Fragment>
//         )
//     }


}

export default WebSearch;

