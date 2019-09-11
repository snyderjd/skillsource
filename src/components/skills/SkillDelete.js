import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

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

    handleDelete = (event) => {
        event.preventDefault();
        this.toggle();
        this.props.deleteSkill(this.props.skill.id);
    }

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