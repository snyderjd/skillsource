import React, { Component } from 'react';
import SkillDataManager from '../skills/SkillDataManager';
import ResourceDataManager from '../resources/ResourceDataManager';
import ResultView from './ResultView';
import CopySkill from './CopySkill';
import './Search.css';
import UserDataManager from '../auth/UserDataManager';

class ResultCard extends Component {
    state = {
        skill: {},
        resources: [],
        creator: {}
    }
    
    componentDidMount() {
        SkillDataManager.getSkill(this.props.result.id).then(skill => {
            ResourceDataManager.getResources(this.props.result.id).then(resources => {
                UserDataManager.getUser(this.props.result.userId).then(user => {
                    this.setState({
                        skill: skill,
                        resources: resources,
                        creator: user
                    })
                })
            })
        })
    }

    copySkill = (skillObject) => {
        return SkillDataManager.postSkill(skillObject);
    }

    editOriginalSkill = (skillObject) => {
        return SkillDataManager.editSkill(skillObject);
    }

    copyResource = (resourceObject) => {
        return ResourceDataManager.saveResource(resourceObject);
    }

    render() {
        console.log("ResultCard", this.state);
        return (
            <React.Fragment>
                <div className="result-card">
                    <h3 className="ResultCard-heading">{this.props.result.name}</h3>
                    <p>Description: {this.props.result.description} </p>
                    <p>Creator: {this.state.creator.username}</p>
                    <p>Times Copied: {this.props.result.timesCopied}</p>
                    <ResultView {...this.props} resources={this.state.resources} />{' '}
                    
                    {this.state.resources.length > 0 &&
                    <CopySkill 
                        {...this.props} 
                        skill={this.state.skill} 
                        resources={this.state.resources}
                        copySkill={this.copySkill}
                        editOriginalSkill={this.editOriginalSkill}
                        copyResource={this.copyResource} />
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ResultCard;
