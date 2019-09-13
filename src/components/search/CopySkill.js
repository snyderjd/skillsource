import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SkillDataManager from '../skills/SkillDataManager';

class CopySkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
            newSkillId: 0,
            resources: []
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    //   this.setState((prevState, props) => ({
    //       counter: prevState.counter + props.increment
    //   }));

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

        

        this.props.copySkill(newSkill).then(postedSkill => {
            this.setState({ newSkillId: postedSkill.id })
        }).then(this.cloneResources).then(this.toggle);
    }

    cloneResources = () => {
        console.log("cloneResources", this.props);

        this.props.resources.map(resource => {
            // create resource object and invoke function to save to the database
            const newResource = {
                skillId: this.state.newSkillId,
                typeId: resource.typeId,
                otherType: resource.otherType,
                title: resource.title,
                summary: resource.summary,
                url: resource.url,
                content: resource.content,
                isComplete: false
            }

            this.props.copyResource(newResource)
        })
    }

    render() {
        console.log("copySkill", this.props);
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
