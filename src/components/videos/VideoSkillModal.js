import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class VideoSkillModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            description: "",
            activeUserId: parseInt(sessionStorage.getItem("activeUserId"))
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    handleFieldChange = (event) => {
        // Update state when input fields change
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    constructNewSkill = (event) => {
        // Take user's inputs, construct an object, and save the object as a skill to the database
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


    render() {
        return (
            <>
                <Button onClick={this.toggle} color="success" size="lg" block>
                    Add a New Skill
                </Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Add to New Skill</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="SkillModal-inputs">
                                <div className="input-pair">
                                    <label htmlFor="name">Skill Name</label>
                                    <input onChange={this.handleFieldChange} type="text"
                                        id="name"
                                        value={this.state.name}
                                        placeholder="Skill Name"
                                        required
                                        autoFocus=""
                                        className="SkillModal-name"
                                    />
                                </div>
                                <div className="input-pair">
                                    <label htmlFor="description">Description</label>
                                    <input onChange={this.handleFieldChange} type="text"
                                        id="description"
                                        value={this.state.description}
                                        placeholder="Description"
                                        className="SkillModal-description"
                                    />
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.constructNewSkill} color="success">Add Skill</Button>{' '}
                        <Button onClick={this.toggle} color="success">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default VideoSkillModal;

