import React, { Component } from 'react';
import SkillModal from './SkillModal';
import SkillDataManager from './SkillDataManager';
import SkillCard from './SkillCard';
import './Skills.css';

class SkillList extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
        skills: [],
        resources: []
    }

    addSkill = (skillObject) => {
        return SkillDataManager.postSkill(skillObject).then(() => {
            SkillDataManager.getSkillsAndResources(this.state.activeUserId).then(skills => {
                this.setState({ skills: skills });
            });
        });
    }

    deleteSkill = (id) => {
        SkillDataManager.deleteSkill(id).then(() => {
            SkillDataManager.getSkillsAndResources(this.state.activeUserId).then(skills => {
                this.setState({ skills: skills });
            });
        });
    }

    editSkill = (skillObject) => {
        return SkillDataManager.editSkill(skillObject).then(() => {
            SkillDataManager.getSkillsAndResources(this.state.activeUserId).then(skills => {
                this.setState({ skills: skills });
            });
        });
    }

    componentDidMount() {
        SkillDataManager.getSkillsAndResources(this.state.activeUserId).then(skills => {
            this.setState({ skills: skills });
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="SkillList-container">
                    <h1 className="SkillList-heading">Your Skills</h1>
                    <div className="SkillModal-container">
                        <SkillModal 
                            {...this.props}
                            addSkill={this.addSkill}
                        />
                    </div>
                    <div className="skills-container">
                        {this.state.skills.map(skill => 
                            <SkillCard 
                                key={skill.id}
                                skill={skill}
                                deleteSkill={this.deleteSkill}
                                editSkill={this.editSkill}
                                {...this.props}
                            />
                        )}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default SkillList
