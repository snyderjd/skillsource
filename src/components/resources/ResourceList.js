import React, { Component } from 'react';
import ResourceDataManager from './ResourceDataManager';
import ResourceModal from './ResourceModal';
import ResourceCard from './ResourceCard';
import SkillDataManager from '../skills/SkillDataManager';
import { Progress } from 'reactstrap';
import './Resources.css';

class ResourceList extends Component {
    state = {
        skill: {},
        resources: [],
        numResources: 0,
        pctComplete: 0,
        numComplete: 0,
        userOwned: false,
        activeUserId: parseInt(sessionStorage.getItem("activeUserId"))
    }

    componentDidMount() {
        SkillDataManager.checkSkillOwner(this.props.skillId, this.state.activeUserId).then(skills => {
            if (skills.length > 0) {

                SkillDataManager.getSkill(this.props.skillId).then(skill => {
                    ResourceDataManager.getResources(this.props.skillId).then(resources => {
                        this.setState({
                            skill: skill,
                            resources: resources,
                            numResources: resources.length,
                            isComplete: skill.isComplete,
                            userOwned: true
                        });
                    });
                });

            }
        });
        
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
        return ResourceDataManager.deleteResource(id).then(() => {
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

    calcProgress = () => {
        // Calculate percentage of skill's resources that are marked as 'complete'
        if (this.state.resources.length === 0) {
            return 0;
        }
        let numComplete = 0

        this.state.resources.map(resource => {
            if (resource.isComplete) {
                numComplete += 1;
            }
        })

        const pctComplete = numComplete / this.state.numResources * 100;
        return Math.round(pctComplete);
    }

    render() {
        return (
            <React.Fragment>
                <div className="ResourceList-container">
                    <h1 className="ResourceList-heading">{this.state.skill.name}</h1>
                    <div className="progress-bar-container">
                        <div className="text-center">You're {this.calcProgress()}% of the way towards completing this skill!</div>
                        <Progress value={`${this.calcProgress()}`} color="success" />
                    </div>
                    {this.state.userOwned &&
                        <div className="ResourceModal-container">
                            <ResourceModal {...this.props} addResource={this.addResource} />
                        </div>
                    }
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
                </div>
            </React.Fragment>
        )
    }
}

export default ResourceList;