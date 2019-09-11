import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TypeDataManager from './TypeDataManager';
import ResourceDataManager from './ResourceDataManager';

class ResourceEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            typeId: 0,
            otherType: "",
            title: "",
            summary: "",
            url: "",
            content: "",
            types: [],
            isComplete: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    // updateSkill = (event) => {
    //     event.preventDefault();
    //     if (this.state.name === "" || this.state.description === "") {
    //         alert("Please enter a name and a description.");
    //     } else {
    //         const updatedSkill = {
    //             id: this.props.skill.id,
    //             name: this.state.name,
    //             userId: this.props.skill.userId,
    //             description: this.state.description,
    //             isComplete: this.props.skill.isComplete,
    //             isOriginal: this.props.skill.isOriginal,
    //             timesCopied: this.props.skill.timesCopied
    //         };
    //         this.props.editSkill(updatedSkill).then(this.toggle);
    //     }
    // }

    updateResource = (event) => {
        event.preventDefault();
        if (this.state.title === "" || this.state.summary === "" || this.state.url === "") {
            alert("Please fill out title, summary, and url fields.");
        } else {
            const updatedResource = {
                id: this.props.resource.id,
                skillId: this.props.skillId,
                typeId: parseInt(this.state.typeId),
                otherType: this.state.otherType,
                title: this.state.title,
                summary: this.state.summary,
                url: this.state.url,
                content: this.state.content,
                isComplete: this.state.isComplete
            }

            this.props.editResource(updatedResource).then(this.toggle).then(this.setState({
                typeId: 0,
                otherType: "",
                title: "",
                summary: "",
                url: "",
                content: ""
            }));
        }
    }

//     buildNewResource = (event) => {
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
//                 typeId: 0,
//                 otherType: "",
//                 title: "",
//                 summary: "",
//                 url: "",
//                 content: ""
//             }));
//         }
//     }

    componentDidMount() {
        ResourceDataManager.getResource(this.props.resource.id).then(resource => {
            TypeDataManager.getTypes().then(types => {
                this.setState({
                    typeId: resource.typeId,
                    otherType: resource.otherType,
                    title: resource.title,
                    summary: resource.summary,
                    url: resource.url,
                    content: resource.content,
                    isComplete: resource.isComplete,
                    types: types
                });
            });
        });
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <>
                <Button onClick={this.toggle}>
                    Edit
                </Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Edit Resource</ModalHeader>
                    <ModalBody>
                        <form>
                            <fieldset>
                                <div className="newResourceForm">
                                    <label htmlFor="title">Title</label>
                                    <input onChange={this.handleFieldChange}
                                        type="text"
                                        id="title"
                                        value={this.state.title}
                                        placeholder="Title of Resource"
                                        required
                                        autoFocus=""
                                    /><br />
                                    <label htmlFor="url">URL</label>
                                    <input onChange={this.handleFieldChange}
                                        type="text"
                                        id="url"
                                        value={this.state.url}
                                        placeholder="Resource URL"
                                        required
                                    /><br />
                                    <label htmlFor="summary">Summary</label>
                                    <input onChange={this.handleFieldChange}
                                        type="text"
                                        id="summary"
                                        value={this.state.summary}
                                        placeholder="Summary of Resource"
                                        required
                                    /><br />
                                    <label htmlFor="type">Type</label>
                                    <select
                                        id="typeId"
                                        value={this.state.typeId}
                                        onChange={this.handleFieldChange}
                                    >
                                        {this.state.types.map(type =>
                                            <option key={type.id} value={type.id}>
                                                {type.typeName}
                                            </option>
                                        )}
                                    </select><br />
                                    <label htmlFor="otherType">Other</label>
                                    <input onChange={this.handleFieldChange}
                                        type="text"
                                        id="otherType"
                                        value={this.state.otherType}
                                        placeholder="If other, please specify"
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.updateResource}>Save</Button>{' '}
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default ResourceEdit;

// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import TypeDataManager from './TypeDataManager';

// class ResourceModal extends Component {




//     render() {
//         return (
//             <>
//                 <Button onClick={this.toggle}>
//                     Add a Resource
//                 </Button>
//                 <Modal isOpen={this.state.modal}
//                     toggle={this.toggle}
//                     className={this.props.className}
//                 >
//                     <ModalHeader toggle={this.toggle}>New Resource</ModalHeader>
//                     <ModalBody>
//                         <form>
//                             <fieldset>
//                                 <div className="newResourceForm">
//                                     <label htmlFor="title">Title</label>
//                                     <input onChange={this.handleFieldChange}
//                                         type="text"
//                                         id="title"
//                                         value={this.state.title}
//                                         placeholder="Title of Resource"
//                                         required
//                                         autoFocus=""
//                                     /><br />
//                                     <label htmlFor="url">URL</label>
//                                     <input onChange={this.handleFieldChange}
//                                         type="text"
//                                         id="url"
//                                         value={this.state.url}
//                                         placeholder="Resource URL"
//                                         required
//                                     /><br />
//                                     <label htmlFor="summary">Summary</label>
//                                     <input onChange={this.handleFieldChange}
//                                         type="text"
//                                         id="summary"
//                                         value={this.state.summary}
//                                         placeholder="Summary of Resource"
//                                         required
//                                     /><br />
//                                     <label htmlFor="type">Type</label>
//                                     <select
//                                         id="typeId"
//                                         value={this.state.typeId}
//                                         onChange={this.handleFieldChange}
//                                     >
//                                         {this.state.types.map(type =>
//                                             <option key={type.id} value={type.id}>
//                                                 {type.typeName}
//                                             </option>
//                                         )}
//                                     </select><br />
//                                     <label htmlFor="otherType">Other</label>
//                                     <input onChange={this.handleFieldChange}
//                                         type="text"
//                                         id="otherType"
//                                         value={this.state.otherType}
//                                         placeholder="If other, please specify"
//                                     />
//                                 </div>
//                             </fieldset>
//                         </form>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button onClick={this.buildNewResource}>Add Skill</Button>{' '}
//                         <Button onClick={this.toggle}>Cancel</Button>
//                     </ModalFooter>
//                 </Modal>
//             </>
//         )
//     }

// }

// export default ResourceModal;