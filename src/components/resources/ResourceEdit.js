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

    updateResource = (event) => {
        // build resource object with edited inputs from the form fields and PUT to the database
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

            this.props.editResource(updatedResource).then(this.toggle);
        }
    }

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
        return (
            <>
                <Button onClick={this.toggle} color="success">
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
                        <Button onClick={this.updateResource} color="success">Save</Button>{' '}
                        <Button onClick={this.toggle} color="success">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default ResourceEdit;
