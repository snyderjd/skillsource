import React, { Component } from 'react';

class ResultResource extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="ResultResource">
                    <h3 className="ResultResource-heading">{this.props.resource.title}</h3>
                    <p>Type: {this.props.resource.type.typeName}</p>
                    <p>Summary: {this.props.resource.summary}</p>
                    <a target="_blank" rel="noopener noreferrer" href={`${this.props.resource.url}`}>{this.props.resource.url}</a>
                </div>
            </React.Fragment>
        )
    }
}

export default ResultResource;