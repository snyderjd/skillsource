import React, { Component } from 'react';
import SkillDataManager from '../skills/SkillDataManager';
import ResourceDataManager from '../resources/ResourceDataManager';
import ResultView from './ResultView';
import CopySkill from './CopySkill';

class ResultCard extends Component {
    state = {
        skill: {},
        resources: []
    }
    
    componentDidMount() {
        SkillDataManager.getSkill(this.props.result.id).then(skill => {
            ResourceDataManager.getResources(this.props.result.id).then(resources => {
                this.setState({
                    skill: skill,
                    resources: resources
                })
            })
        })
    }

    // addSkill = (skillObject) => {
    //     return SkillDataManager.postSkill(skillObject).then(() => {
    //         SkillDataManager.getSkillsAndResources(this.state.activeUserId).then(skills => {
    //             this.setState({ skills: skills });
    //         });
    //     });
    // }
    copySkill = (skillObject) => {
        return SkillDataManager.postSkill(skillObject)
    }

    render() {
        console.log("ResultCard", this.state);
        return (
            <React.Fragment>
                <div className="result-card">
                    <h3>{this.props.result.name}</h3>
                    <p>Description: {this.props.result.description} </p>
                    <p>Times Copied: {this.props.result.timesCopied}</p>
                    <ResultView {...this.props} resources={this.state.resources} />{' '}
                    <CopySkill 
                        {...this.props} 
                        skill={this.state.skill} 
                        resources={this.state.resources}
                        copySkill={this.copySkill} />
                </div>
            </React.Fragment>
        )
    }
}

export default ResultCard;
