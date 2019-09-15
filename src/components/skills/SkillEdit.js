import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SkillDataManager from './SkillDataManager';

class SkillEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            description: "",
            activeUserId: parseInt(sessionStorage.getItem("activeUserId"))
        };

        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    updateSkill = (event) => {
        event.preventDefault();
        if (this.state.name === "" || this.state.description === "") {
            alert("Please enter a name and a description.");
        } else {
            const updatedSkill = {
                id: this.props.skill.id,
                name: this.state.name,
                userId: this.props.skill.userId,
                description: this.state.description,
                isComplete: this.props.skill.isComplete,
                isOriginal: this.props.skill.isOriginal,
                timesCopied: this.props.skill.timesCopied
            };
            this.props.editSkill(updatedSkill).then(this.toggle);
        }
    }

    componentDidMount() {
        // GET skill from the database and set editable properties in state
        SkillDataManager.getSkill(this.props.skill.id).then(skill => {
            this.setState({
                name: skill.name,
                description: skill.description
            });
        });
    }

    render() {
        return (
            <>
                <Button onClick={this.toggle} color="success">
                    Edit
                </Button>
                <Modal isOpen={this.state.modal}
                   toggle={this.toggle}
                   className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Edit Skill</ModalHeader>
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
                        <Button onClick={this.updateSkill} color="success">Save</Button>{' '}
                        <Button onClick={this.toggle} color="success">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default SkillEdit;
