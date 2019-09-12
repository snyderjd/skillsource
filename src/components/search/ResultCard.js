import React, { Component } from 'react';
import SkillDataManager from '../skills/SkillDataManager';
import ResourceDataManager from '../resources/ResourceDataManager';
import ResultResources from './ResultView';

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

    render() {
        console.log("ResultCard", this.state);
        return (
            <React.Fragment>
                <div className="result-card">
                    <h3>{this.props.result.name}</h3>
                    <p>Description: {this.props.result.description} </p>
                    <p>Times Copied: {this.props.result.timesCopied}</p>
                    <ResultResources {...this.props} />
                </div>
            </React.Fragment>
        )
    }
}

export default ResultCard;

{/* <div className="skill-card">
    <h3>{this.props.skill.name}</h3>
    <p>Description: {this.props.skill.description}</p>
    <p>Status: {this.checkComplete() ? "Complete" : "Incomplete"} </p>
    <Link to={`/skills/${this.props.skill.id}`}><Button>View Resources</Button></Link>{' '}
    <SkillEdit {...this.props} editSkill={this.props.editSkill} />{' '}
    <SkillDelete {...this.props} deleteSkill={this.props.deleteSkill} />
</div> */}