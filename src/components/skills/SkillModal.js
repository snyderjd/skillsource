import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SkillModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            description: "",
            activeUserId: parseInt(sessionStorage.getItem("activeUserId"))
        };

        this.toggle = this.toggle.bind(this);
    }

    // Open and close the modal
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    // Update state when input fields change
    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    // Take user's inputs, construct an object, and save the object as a skill to the database
    constructNewSkill = (event) => {
        event.preventDefault();
        if (this.state.name === "" || this.state.description === "") {
            alert("Please enter a name and a description.");
        } else {
            const newSkill = {
                name: this.state.name,
                userId: this.state.activeUserId,
                description: this.state.description,
                isComplete: false,
                isOriginal: true,
                timesCopied: 0
            }

            this.props.addSkill(newSkill).then(this.toggle).then(this.setState({
                name: "",
                description: ""
            }));


        }
    }

    // Render modal with necessary inputs to add a skill
    render() {
        return (
            <>
                <Button onClick={this.toggle}>
                    Add a Skill
                </Button>
                <Modal  isOpen={this.state.modal} 
                        toggle={this.toggle}
                        className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>New Skill</ModalHeader>
                    <ModalBody>
                        <form>
                            <fieldset>
                                <div className="newSkillForm">
                                    <label htmlFor="name">Skill Name</label>
                                    <input onChange={this.handleFieldChange} type="text"
                                        id="name"
                                        value={this.state.name}
                                        placeholder="Skill Name"
                                        required
                                        autoFocus=""
                                    /><br />
                                    <label htmlFor="description">Description</label>
                                    <input onChange={this.handleFieldChange} type="text"
                                        id="description"
                                        value={this.state.description}
                                        placeholder="Description"
                                    
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.constructNewSkill}>Add Skill</Button>{' '}
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default SkillModal;