import React, { Component } from 'react';
import VideoModal from './VideoModal';
import { Link } from 'react-router-dom';

class VideoResult extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="VideoResult-card">
                    <h3>{this.props.video.snippet.title}</h3>
                    <p>{this.props.video.snippet.description}</p>
                    <p>Date: {this.props.video.snippet.publishedAt}</p>
                    <Link target="_blank" to={`//www.youtube.com/watch/${this.props.video.id.videoId}`}>
                        Go To Resource
                    </Link><br />
                    <img src={this.props.video.snippet.thumbnails.default.url} alt="Video thumbnail"></img><br />
                    <VideoModal {...this.props} />
                </div>
            </React.Fragment>
        )
    }

}

export default VideoResult;

// render() {
//         console.log(this.props.video);
//         return (
//             <React.Fragment>
//                 <div className="resultItem">
//                     <h3>{this.props.video.snippet.title}</h3>
//                     <p>{this.props.video.snippet.description}</p>
//                     <p>Date: {this.props.video.snippet.publishedAt}</p>
//                     <img src={this.props.video.snippet.thumbnails.default.url} alt="Video thumbnail"></img>
//                     <iframe
//                         width="840"
//                         height="473"
//                         src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
//                     </iframe>
//                 </div>
//             </React.Fragment>
//         )
//     }

