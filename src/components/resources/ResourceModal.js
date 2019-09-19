import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TypeDataManager from './TypeDataManager';
import './Resources.css';

class ResourceModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            typeId: 1,
            otherType: "",
            title: "",
            summary: "",
            url: "",
            content: "",
            types: []
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
        console.log("handleFieldChange", this.state);
    }

    buildNewResource = (event) => {
        // build new resource object with inputs from the form fields and save to the database
        event.preventDefault();
        if (this.state.title === "" || this.state.summary === "" || this.state.url === "") {
            alert("Please ensure all fields are filled out.");
        } else {
            const newResource = {
                skillId: this.props.skillId,
                typeId: parseInt(this.state.typeId),
                otherType: this.state.otherType,
                title: this.state.title,
                summary: this.state.summary,
                url: this.state.url,
                content: this.state.content,
                isComplete: false
            }

            this.props.addResource(newResource).then(this.toggle).then(this.setState({
                typeId: 1,
                otherType: "",
                title: "",
                summary: "",
                url: "",
                content: ""
            }));
        }
    }

    componentDidMount() {
        TypeDataManager.getTypes().then(types => {
            this.setState({ types: types })
        })
    }

    render() {
        return(
            <>
                <Button onClick={this.toggle} color="success" size="lg" block>
                    Add a Resource
                </Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                <ModalHeader toggle={this.toggle}>New Resource</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="ResourceModal-inputs">
                            <div className="ResourceModal-input-pair">
                                <label htmlFor="title">Title</label>
                                <input onChange={this.handleFieldChange}
                                    type="text"
                                    id="title"
                                    value={this.state.title}
                                    placeholder="Title of Resource"
                                    required
                                    autoFocus=""
                                    className="ResourceModal-input"
                                />
                            </div>
                            <div className="ResourceModal-input-pair">
                                <label htmlFor="url">URL</label>
                                <input onChange={this.handleFieldChange}
                                    type="text"
                                    id="url"
                                    value={this.state.url}
                                    placeholder="Resource URL"
                                    required
                                    className="ResourceModal-input"
                                />
                            </div>
                            <div className="ResourceModal-input-pair">
                                <label htmlFor="summary">Summary</label>
                                <input onChange={this.handleFieldChange}
                                    type="text"
                                    id="summary"
                                    value={this.state.summary}
                                    placeholder="Summary of Resource"
                                    required
                                    className="ResourceModal-input"
                                />
                            </div>
                            <div className="ResourceModal-input-pair">
                                <label htmlFor="type">Type</label>
                                <select
                                    id="typeId"
                                    value={this.state.typeId}
                                    className="ResourceModal-input"
                                    onChange={this.handleFieldChange}
                                >
                                    {this.state.types.map(type =>
                                        <option key={type.id} value={type.id}>
                                            {type.typeName}
                                        </option>
                                    )}
                                </select>
                            </div>
                            <div className="ResourceModal-input-pair">
                                <label htmlFor="otherType">Other</label>
                                <input onChange={this.handleFieldChange}
                                    type="text"
                                    id="otherType"
                                    value={this.state.otherType}
                                    placeholder="If other, please specify"
                                    className="ResourceModal-input"
                                />
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.buildNewResource} color="success">Add Resource</Button>{' '}
                    <Button onClick={this.toggle} color="success">Cancel</Button>
                </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default ResourceModal;

