import React, { Component } from 'react';
import { Button } from 'reactstrap';
import SkillModal from './SkillModal';
import SkillDataManager from './SkillDataManager';

class SkillList extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
        skills: []
    }

    addSkill = (skillObject) => {
        return SkillDataManager.postSkill(skillObject).then(() => {
            SkillDataManager.getSkills(this.state.activeUserId).then(skills => {
                this.setState({ skills: skills });
            });
        });
    }

    componentDidMount() {
        SkillDataManager.getSkills(this.state.activeUserId).then(skills => {
            this.setState({ skills: skills });
        })
    }

    render() {
        console.log(this.state)
        return (
            <React.Fragment>
                <SkillModal 
                    {...this.props}
                    addSkill={this.addSkill}
                />
                <div className="skills-container">
                    <h3>SkillCards</h3>
                </div>
            </React.Fragment>
        )
    }

}

export default SkillList