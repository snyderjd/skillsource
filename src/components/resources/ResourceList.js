import React, { Component } from 'react';
import ResourceDataManager from './ResourceDataManager';
import ResourceModal from './ResourceModal';

class ResourceList extends Component {
    state = {
        skillName: "",
        resources: []
    }

    componentDidMount() {
        ResourceDataManager.getSkillAndResources(this.props.skillId).then(skill => {
            this.setState({
                skillName: skill.name,
                resources: skill.resources
            })
        })
    }

    addResource = (resourceObject) => {
        return ResourceDataManager.saveResource(resourceObject).then(() => {
            ResourceDataManager.getSkillAndResources(this.props.skillId).then(skill => {
                this.setState({
                    skillName: skill.name,
                    resrouces: skill.resources
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
                <div className="resource-card-container">Resource Cards</div>
            </React.Fragment>
        )
    }
}

export default ResourceList;