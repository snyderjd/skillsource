import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TypeDataManager from '../resources/TypeDataManager';
import ResourceDataManager from '../resources/ResourceDataManager';
import SkillDataManager from '../skills/SkillDataManager';
import WebSkillModal from './WebSkillModal';
import './Web.css';

class WebModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            typeId: 0,
            title: "",
            summary: "",
            url: "",
            content: "",
            otherType: "",
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
        this.setState(newState);
    }

    buildNewResource = (event) => {
        event.preventDefault();
        // build new resource object with the search result's properties, user's skill selection and save to database
        const newResource = {
            skillId: parseInt(this.state.skillId),
            typeId: parseInt(this.state.typeId),
            otherType: this.state.otherType,
            title: this.props.result.title,
            summary: this.props.result.snippet,
            url: this.props.result.link,
            content: this.state.content,
            isComplete: false
        }

        ResourceDataManager.saveResource(newResource).then(this.toggle);
    }

    addSkill = (skillObject) => {
        return SkillDataManager.postSkill(skillObject).then(() => {
            SkillDataManager.getSkillsAndResources(this.state.activeUserId).then(skills => {
                this.setState({ skills: skills });
            });
        });
    }

    componentDidMount() {
        TypeDataManager.getTypes().then(types => {
            SkillDataManager.getSkills(this.state.activeUserId).then(skills => {
                this.setState({
                    types: types,
                    skills: skills
                });
            });
        });
    }



    render() {
        return (
            <>
                <Button onClick={this.toggle} color="success" className="WebModal-openButton">
                    Add to a Skill
                </Button>
                <Modal isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Add to a Skill</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="WebModal-inputs">
                                <div className="WebModal-select">
                                    <label htmlFor="skillId">Please select which skill you would like to add this video to, or create a new skill for this resource.</label>
                                    <select
                                        id="skillId"
                                        value={this.state.skillId}
                                        onChange={this.handleFieldChange}
                                    >
                                        <option>Select Skill</option>
                                        {this.state.skills.map(skill =>
                                            <option key={skill.id} value={skill.id}>
                                                {skill.name}
                                            </option>
                                        )}
                                    </select>
                                </div>
                                <WebSkillModal {...this.props} addSkill={this.addSkill} />
                                <div className="WebModal-input-pair">
                                    <p>Title: {this.props.result.title}</p>
                                </div>
                                <div className="WebModal-input-pair">
                                    <p>URL: {this.props.result.link}</p>
                                </div>
                                <div className="WebModal-input-pair">
                                    <p>Summary: {this.props.result.snippet}</p>
                                </div>
                                <div className="WebModal-input-pair">
                                    <label htmlFor="type">Type</label>
                                    <select
                                        id="typeId"
                                        value={this.state.typeId}
                                        className="WebModal-input"
                                        onChange={this.handleFieldChange}
                                    >
                                        <option>Select Type</option>
                                        {this.state.types.map(type =>
                                            <option key={type.id} value={type.id}>
                                                {type.typeName}
                                            </option>
                                        )}
                                    </select>
                                </div>
                                {parseInt(this.state.typeId) === 6 &&
                                    <div className="WebModal-input-pair">
                                        <label htmlFor="otherType">Other</label>
                                        <input onChange={this.handleFieldChange}
                                            type="text"
                                            id="otherType"
                                            value={this.state.otherType}
                                            placeholder="If other, please specify"
                                            className="WebModal-input"
                                        />
                                    </div>
                                }
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.buildNewResource} color="success">Add Resource</Button>
                        <Button onClick={this.toggle} color="success">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default WebModal;
