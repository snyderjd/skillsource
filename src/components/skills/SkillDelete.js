import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    // editExistingEvent = (event) => {
    //     event.preventDefault();
    //     if (this.state.eventName === "" ||
    //         this.state.date === "" ||
    //         this.state.eventLocation === "") {
    //         alert("Please fill out all fields");
    //     } else {
    //         this.setState({ loadingStatus: true });
    //         const editedEvent = {
    //             id: this.props.event.id,
    //             userId: parseInt(sessionStorage.getItem("credentials")),
    //             eventName: this.state.eventName,
    //             date: this.state.date,
    //             eventLocation: this.state.eventLocation
    //         };
    //         this.props.postEditedEvent(editedEvent)
    //             .then(this.toggle)
    //     }
    // };

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





// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// class SkillModal extends Component {




//     handleFieldChange = (event) => {
//         const newState = {};
//         newState[event.target.id] = event.target.value;
//         this.setState(newState);
//     }

//     constructNewSkill = (event) => {
//         event.preventDefault();
//         if (this.state.name === "" || this.state.description === "") {
//             alert("Please enter a name and a description.");
//         } else {
//             const newSkill = {
//                 name: this.state.name,
//                 userId: this.state.activeUserId,
//                 description: this.state.description,
//                 isComplete: false,
//                 isOriginal: true,
//                 timesCopied: 0
//             }

//             this.props.addSkill(newSkill).then(this.toggle);
//         }
//     }



// }

// export default SkillModal;