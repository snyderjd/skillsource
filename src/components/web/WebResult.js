import React, { Component } from 'react';
import WebModal from './WebModal';
import { Link } from 'react-router-dom';

class WebResult extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="WebResult-card result-card">
                    <h3 className="ResultCard-heading">{this.props.result.title}</h3>
                    <p>{this.props.result.snippet}</p>
                    <a target="_blank" href={this.props.result.link}>Go To Resource</a><br/>
                    <WebModal 
                        key={this.props.result.cacheId}
                        result={this.props.result}
                        {...this.props}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default WebResult;


// import React, { Component } from 'react';
// import VideoModal from './VideoModal';
// import { Link } from 'react-router-dom';

// class VideoResult extends Component {

//     render() {
//         return (
//             <React.Fragment>
//                 <div className="VideoResult-card">
//                     <h3>{this.props.video.snippet.title}</h3>
//                     <p>{this.props.video.snippet.description}</p>
//                     <p>Date: {this.props.video.snippet.publishedAt}</p>
//                     <Link target="_blank" to={`//www.youtube.com/watch/${this.props.video.id.videoId}`}>
//                         Go To Resource
//                     </Link><br />
//                     <img src={this.props.video.snippet.thumbnails.default.url} alt="Video thumbnail"></img><br />
//                     <VideoModal {...this.props} />
//                 </div>
//             </React.Fragment>
//         )
//     }

// }