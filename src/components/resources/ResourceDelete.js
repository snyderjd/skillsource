import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

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
        this.props.deleteResource(this.props.resource.id);
    }

    render() {
        return (
            <>
                <Button onClick={this.toggle} color="success">Delete</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
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