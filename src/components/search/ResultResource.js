import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultResource extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="ResultResource">
                    <h3 className="ResultResource-heading">{this.props.resource.title}</h3>
                    <p>Type: {this.props.resource.type.typeName}</p>
                    <p>Summary: {this.props.resource.summary}</p>
                    <Link target="_blank" to={`//${this.props.resource.url}`}>Go To Resource</Link>
                </div>
            </React.Fragment>
        )
    }
}

export default ResultResource;