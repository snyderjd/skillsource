import React, { Component } from 'react';
import SkillDelete from './SkillDelete';
import SkillEdit from './SkillEdit';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SkillCard extends Component {
    // Check to see if all the resources for a given skill are marked as complete
    checkComplete = () => {
        if (this.props.skill.resources.length === 0) {
            return false
        }

        return this.props.skill.resources.every(resource => resource.isComplete)
    }

    // Render a skill, showing its basic information on the SkillList component
    render() {
        return (
            <React.Fragment>
                <div className="skill-card">
                    <h3 className="SkillCard-heading">{this.props.skill.name}</h3>
                    <p>Description: {this.props.skill.description}</p>
                    <p>Status: {this.checkComplete() ? "Complete" : "Incomplete" } </p>
                    <Link to={`/skills/${this.props.skill.id}`}>
                        <Button color="success">View Skill</Button>
                    </Link>{' '}
                    <SkillEdit {...this.props} editSkill={this.props.editSkill} />{' '}
                    <SkillDelete {...this.props} deleteSkill={this.props.deleteSkill} />
                </div>
            </React.Fragment>
        )
    }
}

export default SkillCard;
