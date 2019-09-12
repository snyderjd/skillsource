import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SkillDataManager from '../skills/SkillDataManager';

class CopySkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    componentDidMount() {
        console.log("compDidMount", this.props);
        SkillDataManager.getSkill(this.props.skill.id).then(skill => {
            this.setState({
                originalSkill: skill
            });
        })
    }

    // componentDidMount() {
    //     SkillDataManager.getSkill(this.props.skill.id).then(skill => {
    //         this.setState({
    //             name: skill.name,
    //             description: skill.description
    //         });
    //     });
    // }

    cloneSkill = (event) => {
        event.preventDefault();
        console.log(this.props);

        const newSkill = {
            name: this.props.skill.name,
            userId: this.state.activeUserId,
            description: this.props.skill.description,
            isComplete: false,
            isOriginal: false,
            timesCopied: 0
        }

        let newTimesCopied = this.props.skill.timesCopied + 1;
        
        // Get info for the original skill from props
        const updatedSkill = {
            id: this.props.skill.id,
            name: this.props.skill.name,
            userId: this.props.skill.userId,
            description: this.props.skill.description,
            isComplete: this.props.skill.isComplete,
            isOriginal: this.props.skill.isOriginal,
            timesCopied: newTimesCopied
        }

        this.props.editOriginalSkill(updatedSkill);

        this.props.copySkill(newSkill).then(this.toggle);
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Button onClick={this.toggle}>
                    Add Skill
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Skill</ModalHeader>
                    <ModalBody>
                        Are you sure you want to copy this skill and all of its associated resources?
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.cloneSkill}>Yes</Button>
                        <Button onClick={this.toggle}>No</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default CopySkill;
