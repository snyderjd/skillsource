import React, { Component } from 'react';
import ResourceDataManager from './ResourceDataManager';
import ResourceModal from './ResourceModal';
import ResourceCard from './ResourceCard';
import SkillDataManager from '../skills/SkillDataManager';

class ResourceList extends Component {
    state = {
        skill: {},
        resources: [],
        numResources: 0,
        pctComplete: 0
    }

    componentDidMount() {
        SkillDataManager.getSkill(this.props.skillId).then(skill => {
            ResourceDataManager.getResources(this.props.skillId).then(resources => {
                this.setState({
                    skill: skill,
                    resources: resources,
                    numResources: resources.length
                })
            })
        })
    }

    addResource = (resourceObject) => {
        return ResourceDataManager.saveResource(resourceObject).then(() => {
            SkillDataManager.getSkill(this.props.skillId).then(skill => {
                ResourceDataManager.getResources(this.props.skillId).then(resources => {
                    this.setState({
                        skill: skill,
                        resources: resources,
                        numResources: resources.length
                    });
                });
            });
        });
    }

    deleteResource = (id) => {
        ResourceDataManager.deleteResource(id).then(() => {
            SkillDataManager.getSkill(this.props.skillId).then(skill => {
                ResourceDataManager.getResources(this.props.skillId).then(resources => {
                    this.setState({
                        skill: skill,
                        resources: resources,
                        numResources: resources.length
                    });
                });
            });
        });
    }

    editResource = (resourceObject) => {
        return ResourceDataManager.editResource(resourceObject).then(() => {
            SkillDataManager.getSkill(this.props.skillId).then(skill => {
                ResourceDataManager.getResources(this.props.skillId).then(resources => {
                    this.setState({
                        skill: skill,
                        resources: resources,
                        numResources: resources.length
                    });
                });
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.skill.name}</h1>
                <div className="progress-bar-container">Progress Bar</div>
                <ResourceModal {...this.props} addResource={this.addResource} />
                <div className="resource-card-container">
                    {this.state.resources.map(resource =>
                        <ResourceCard
                            key={resource.id}
                            resource={resource}
                            deleteResource={this.deleteResource}
                            editResource={this.editResource}
                            {...this.props}
                        />
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default ResourceList;