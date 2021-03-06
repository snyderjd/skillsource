import React, { Component } from 'react';
import ResourceDelete from './ResourceDelete';
import ResourceEdit from './ResourceEdit';
import TypeDataManager from './TypeDataManager';
import ResourceDataManager from './ResourceDataManager';
import './Resources.css';

class ResourceCard extends Component {
    state = {
        typeId: 0,
        otherType: "",
        title: "",
        summary: "",
        url: "",
        content: "",
        types: [],
        isComplete: false
    }

    componentDidMount() {
        // Get resource from the database and save its properties in state
        ResourceDataManager.getResource(this.props.resource.id).then(resource => {
            TypeDataManager.getTypes().then(types => {
                this.setState({
                    typeId: resource.typeId,
                    otherType: resource.otherType,
                    title: resource.title,
                    summary: resource.summary,
                    url: resource.url,
                    content: resource.content,
                    isComplete: resource.isComplete,
                    types: types
                });
            });
        });
    }

    
    markComplete = (event) => {
        // Build resource object with isComplete = true when user checks 'completed' and PUT to database
        this.setState({ isComplete: !this.state.isComplete }, () => {

            const updatedResource = {
                id: this.props.resource.id,
                isComplete: this.state.isComplete
            }

            this.props.editResource(updatedResource);
        })

    }

    render() {
        return (
            <React.Fragment>
                <div className="resource-card">
                    <h3 className="ResourceCard-heading">{this.props.resource.title}</h3>
                    <p>Type: {this.props.resource.type.typeName}</p>
                    <p>Summary: {this.props.resource.summary}</p> 
                    <a target="_blank" href={this.props.resource.url} rel="noopener noreferrer">{this.props.resource.url}</a><br />
                    <input onChange={this.markComplete}
                        type="checkbox"
                        id="isComplete"
                        checked={this.state.isComplete}
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



