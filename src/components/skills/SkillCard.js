import React, { Component } from 'react';
import SkillDelete from './SkillDelete';
import SkillEdit from './SkillEdit';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class SkillCard extends Component {
    checkComplete = () => {
        return this.props.skill.resources.every(resource => resource.isComplete)
    }

    render() {
        console.log(this.props.skill);
        return (
            <React.Fragment>
                <div className="skill-card">
                    <h3>{this.props.skill.name}</h3>
                    <p>Description: {this.props.skill.description}</p>
                    <p>Status: {this.checkComplete() ? "Complete" : "Incomplete" } </p>
                    <Link to={`/skills/${this.props.skill.id}`}><Button>View Resources</Button></Link>{' '}
                    <SkillEdit {...this.props} editSkill={this.props.editSkill} />{' '}
                    <SkillDelete {...this.props} deleteSkill={this.props.deleteSkill} />
                </div>
            </React.Fragment>
        )
    }
}

export default SkillCard;
