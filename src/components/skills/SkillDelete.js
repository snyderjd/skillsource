import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import ResourceDataManager from '../resources/ResourceDataManager';

class SkillDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    // Get the resources associated with a particular skill and delete them
    deleteResources = (skillId) => {
        ResourceDataManager.getResources(skillId).then(resources => {
            resources.map(resource => {
                return ResourceDataManager.deleteResource(resource.id);
            })
        })
    }

    // Delete the resources, delete the skill, and close the modal
    handleDelete = (event) => {
        event.preventDefault();
        this.toggle();

        // this.deleteResources(this.props.skill.id);

        this.props.deleteSkill(this.props.skill.id);
    }

    // Make user confirm that they really want to delete a skill and invoke handleDelete to delete the associated resources and the skill
    render() {
        return (
            <>
                <Button onClick={this.toggle}>Delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <p>Are you sure you want to delete this skill? Deleting this skill will also delete all of its associated resources.</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleDelete}>I'm Sure</Button>
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default SkillDelete;