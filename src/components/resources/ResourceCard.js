import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ResourceDelete from './ResourceDelete';
import ResourceEdit from './ResourceEdit';

class ResourceCard extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="resource-card">
                    <h3>{this.props.resource.title}</h3>
                    <p>Type: {this.props.resource.type.typeName}</p>
                    <p>Summary: {this.props.resource.summary}</p> 
                    <Link target="_blank" to={`//${this.props.resource.url}`}>Go To Resource</Link><br />
                    <input onChange={this.handleFieldChange}
                        type="checkbox"
                        id=""
                    />
                    <label htmlFor="isComplete">Completed</label><br />
                    <ResourceDelete {...this.props} deleteResource={this.props.deleteResource} />{' '}
                    <ResourceEdit {...this.props} editResource={this.props.editResource} />
                </div>
            </React.Fragment>
        )
    }
}

export default ResourceCard;

