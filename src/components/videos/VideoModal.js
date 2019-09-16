import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SkillDataManager from '../skills/SkillDataManager';

class VideoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            typeId: 5,
            title: "",
            summary: "",
            url: "",
            content: "",
            types: [],
            skills: [],
            skillId: 0,
            activeUserId: parseInt(sessionStorage.getItem("activeUserId"))
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState)
    }

    buildNewResource = (event) => {
        event.preventDefault();
        // build new resource object with the video's properties and user's skill selection and save to the database
        const newResource = {
            skillId: parseInt(this.state.skillId),
            typeId: parseInt(this.state.typeId),
            otherType: '',
            title: this.props.video.snippet.title,
            summary: this.props.video.snippet.description,
              
        }

    }

//     buildNewResource = (event) => {
//         // build new resource object with inputs from the form fields and save to the database
//         event.preventDefault();
//         if (this.state.title === "" || this.state.summary === "" || this.state.url === "") {
//             alert("Please ensure all fields are filled out.");
//         } else {
//             const newResource = {
//                 skillId: this.props.skillId,
//                 typeId: parseInt(this.state.typeId),
//                 otherType: this.state.otherType,
//                 title: this.state.title,
//                 summary: this.state.summary,
//                 url: this.state.url,
//                 content: this.state.content,
//                 isComplete: false
//             }

//             this.props.addResource(newResource).then(this.toggle).then(this.setState({
//                 typeId: 1,
//                 otherType: "",
//                 title: "",
//                 summary: "",
//                 url: "",
//                 content: ""
//             }));
//         }
//     }

    componentDidMount() {
        SkillDataManager.getSkills(this.state.activeUserId).then(skills => {
            this.setState({ skills: skills })
        })
    }

    render() {
        return (
            <>
                <Button onClick={this.toggle} color="success">
                    Add to a Skill
                </Button>
                <Modal isOpen={this.state.modal}
                        toggle={this.toggle}
                        className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Add to a Skill</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="VideoModal-inputs">

                                <div className="VideoModal-input-pair">
                                    <label htmlFor="type">Please select which skill you would like to add this video to:</label>
                                    <select
                                        id="skillId"
                                        value={this.state.skill}
                                        className="VideoModal-input"
                                        onChange={this.handleFieldChange}
                                    >
                                        {this.state.skills.map(skill =>
                                            <option key={skill.id} value={skill.id}>
                                                {skill.name}
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <div className="VideoModal-info">
                                    <p>Title: {this.props.video.snippet.title}</p>
                                    <p>Summary: {this.props.video.snippet.description}</p>
                                    <p>Type: Video</p>
                                </div>
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.buildNewResource} color="success">Add Video</Button>{' '}
                        <Button onClick={this.toggle} color="success">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default VideoModal;


// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import TypeDataManager from './TypeDataManager';
// import './Resources.css';

// class ResourceModal extends Component {



//     render() {
//         return (
//             
//         )
//     }

// }

// export default ResourceModal;