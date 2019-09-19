import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    incrementUser = () => {
        // increment skillsCopied for the user whose skill is copied
        let newSkillsCopied = this.props.creator.timesCopied + 1;
        const updatedUser = {
            id: this.props.creator.id,
            timesCopied: newSkillsCopied
        }
    
        this.props.editCreator(updatedUser)
    }

    incrementCounter = () => {
        // increment the copied skill's timesCopied
        let newTimesCopied = this.props.skill.timesCopied + 1;
        const updatedSkill = {
            id: this.props.skill.id,
            timesCopied: newTimesCopied
        }

        this.props.editOriginalSkill(updatedSkill)
    }

    handleSubmit = () => {
        this.incrementCounter();
        this.incrementUser();
        
        // create object for the copied skill with activeUser's id
        const newSkill = {
            name: this.props.skill.name,
            userId: this.state.activeUserId,
            description: this.props.skill.description,
            isComplete: false,
            isOriginal: false,
            timesCopied: 0
        }

        // post the new skill to database, pass the id to cloneResources and copy all the resources
        this.props.copySkill(newSkill).then(postedSkill => {
            this.cloneResources(postedSkill.id)
        }).then(this.toggle);
    }

    cloneResources = (skillId) => {

        const newResources = this.props.resources.map(resource => {
            // create resource object with the new skillId
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
        })

        // map over the new resources and post to the database
        newResources.map(newResource => this.props.copyResource(newResource));
    }

    render() {
            return (
                <>
                <Button onClick={this.toggle} color="success">
                        Add Skill
                </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add Skill</ModalHeader>
                        <ModalBody>
                            Are you sure you want to copy this skill and all of its associated resources?
                    </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.handleSubmit} color="success">Yes</Button>
                            <Button onClick={this.toggle} color="success">No</Button>
                        </ModalFooter>
                    </Modal>
                </>
            )

    }
}

export default CopySkill;
