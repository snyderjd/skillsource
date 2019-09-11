import React, { Component } from 'react';
import ResourceDataManager from './ResourceDataManager';
import ResourceModal from './ResourceModal';
import ResourceCard from './ResourceCard';
import SkillDataManager from '../skills/SkillDataManager';

class ResourceList extends Component {
    state = {
        skillName: "",
        resources: []
    }

    componentDidMount() {
        SkillDataManager.getSkill(this.props.skillId).then(skill => {
            ResourceDataManager.getResources(this.props.skillId).then(resources => {
                this.setState({
                    skillName: skill.name,
                    resources: resources
                })
            })
        })
    }

    addResource = (resourceObject) => {
        return ResourceDataManager.saveResource(resourceObject).then(() => {
            SkillDataManager.getSkill(this.props.skillId).then(skill => {
                ResourceDataManager.getResources(this.props.skillId).then(resources => {
                    this.setState({
                        skillName: skill.name,
                        resources: resources
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
                        skillName: skill.name,
                        resources: resources
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
                        skillName: skill.name,
                        resources: resources
                    });
                });
            });
        });
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <h1>Skill Name</h1>
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