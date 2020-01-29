import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ResourceDelete extends Component {
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
        // Manually remove the modal-open class - which was preventing scrolling after closing the modal
        document.body.classList.remove('modal-open');
        this.props.deleteResource(this.props.resource.id);
    }

    render() {
        return (
            <>
                <Button onClick={this.toggle} color="success">Delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Delete Resource</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to delete this resource?</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleDelete} color="success">I'm Sure</Button>
                        <Button onClick={this.toggle} color="success">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default ResourceDelete;