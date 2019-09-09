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

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    constructNewSkill = (event) => {
        event.preventDefault();
    }

//     constructNewEvent = event => {
//         event.preventDefault();
//         if (this.state.eventName === "" ||
//             this.state.date === "" ||
//             this.state.eventLocation === "") {
//             alert("Please fill out all fields");
//         } else {
//             this.setState({ loadingStatus: true });
//             const newEvent = {
//                 eventName: this.state.eventName,
//                 userId: parseInt(sessionStorage.getItem("credentials")),
//                 date: this.state.date,
//                 eventLocation: this.state.eventLocation
//             };
//             this.props.addEvent(newEvent)
//                 .then(this.toggle)
//         }
//     };

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

// class EventNewModal extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             events: [],
//             eventName: "",
//             date: "",
//             eventLocation: "",
//             modal: false
//         };

//         this.toggle = this.toggle.bind(this);
//     }



//     render() {
//         return (
//             <>
//                 <section className="eventSectionContent">
//                     <Button type="button"
//                         color="success"
//                         onClick={this.toggle}>
//                         New Event
//             </Button>
//                 </section>
//                 <div>
//                     <Modal isOpen={this.state.modal} toggle={this.toggle}

//                         className={this.props.className}

//                     >
//                         <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
//                         <ModalBody>
//                             <form>
//                                 <fieldset>
//                                     <div className="newEventForm">
//                                         <input onChange={this.handleFieldChange} type="text"
//                                             id="eventName"
//                                             placeholder="Event Name"
//                                             required
//                                             autoFocus=""
//                                         /><br />
//                                         <input onChange={this.handleFieldChange} type="date"
//                                             id="date"
//                                             placeholder="Date"
//                                             required
//                                         /><br />
//                                         <input onChange={this.handleFieldChange} type="text"
//                                             id="eventLocation"
//                                             placeholder="Location"
//                                             required
//                                         /><br />
//                                     </div>
//                                 </fieldset>
//                             </form>
//                         </ModalBody>
//                         <ModalFooter>
//                             <Button color="primary" onClick={this.constructNewEvent}>Save</Button>{' '}
//                             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//                         </ModalFooter>
//                     </Modal>
//                 </div>
//             </>
//         )
//     }
// }

// export default EventNewModal