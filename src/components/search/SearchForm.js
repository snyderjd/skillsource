import React, { Component } from 'react';
import SearchDataManager from './SearchDataManager';

class SearchForm extends Component {
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

    // Get all skills and store in state
    componentDidMount() {

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
                    <button onClick={this.executeSearch}>Search</button>
                </div>
                <div className="resultContainer">
                    

                </div>
                
            </React.Fragment>
        )
    }
//                 <div className="resultContainer">
//                     {this.state.videos.length > 0 &&
//                         this.state.videos.map(video =>
//                             <VideoResult
//                                 key={video.id.videoId}
//                                 video={video}
//                             />
//                         )}
//                 </div>
    
}

export default SearchForm;

// import React, { Component } from 'react';
// import VideoResult from './VideoResult';
// import VideoManager from './VideoManager';
// import './Video.css';

// class VideoSearchForm extends Component {
//     state = {
//         videoSearchInput: "",
//         videos: []
//     }

//     searchVideos = (event) => {
//         VideoManager.getVideos(this.state.videoSearchInput).then(videos => {
//             this.setState({ videos: videos.items })
//         })
//     }

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="searchContainer">
//                     <label>Search for Videos</label>
//                     <input
//                         className="searchInput"
//                         type="text"
//                         id="videoSearchInput"
//                         value={this.state.videoSearchInput}
//                         onChange={this.handleFieldChange}
//                     />
//                     <button onClick={this.searchVideos}>Search for Videos</button>
//                 </div>
//                 <div className="resultContainer">
//                     {this.state.videos.length > 0 &&
//                         this.state.videos.map(video =>
//                             <VideoResult
//                                 key={video.id.videoId}
//                                 video={video}
//                             />
//                         )}
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

// export default VideoSearchForm;