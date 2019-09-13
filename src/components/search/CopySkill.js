import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import SkillDataManager from '../skills/SkillDataManager';

class CopySkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
            newSkillId: 0
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    incrementCounter = () => {
        let newTimesCopied = this.props.skill.timesCopied + 1;
        const updatedSkill = {
            id: this.props.skill.id,
            timesCopied: newTimesCopied
        }

        this.props.editOriginalSkill(updatedSkill)
    }

    handleSubmit = () => {
        this.incrementCounter();
        
        const newSkill = {
            name: this.props.skill.name,
            userId: this.state.activeUserId,
            description: this.props.skill.description,
            isComplete: false,
            isOriginal: false,
            timesCopied: 0
        }

        this.props.copySkill(newSkill).then(postedSkill => {
            this.cloneResources(postedSkill.id)
        }).then(this.toggle);
    }

    cloneResources = (skillId) => {
        console.log("cloneResources state", this.state);
        console.log("cloneResources props", this.props)

        const newResources = this.props.resources.map(resource => {
            // debugger
            // create resource object and invoke function to save to the database
            const newResource = {
                skillId: skillId,
                typeId: resource.typeId,
                otherType: resource.otherType,
                title: resource.title,
                summary: resource.summary,
                url: resource.url,
                content: resource.content,
                isComplete: false
            }

            return newResource;
            // return this.props.copyResource(newResource)
        })

        console.log("newResources", newResources);

        newResources.map(newResource => this.props.copyResource(newResource));

    }

    render() {
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
                            <Button onClick={this.handleSubmit}>Yes</Button>
                            <Button onClick={this.toggle}>No</Button>
                        </ModalFooter>
                    </Modal>
                </>
            )

    }
}

export default CopySkill;
