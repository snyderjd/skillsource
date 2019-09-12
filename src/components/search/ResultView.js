import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SkillDataManager from '../skills/SkillDataManager';
import ResultResource from './ResultResource';

class ResultView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            resources: []
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    render() {
        return (
            <>
                <Button onClick={this.toggle}>
                    View Resources
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Resources</ModalHeader>
                    <ModalBody>
                        {this.props.resources.map(resource =>
                            <ResultResource
                                key={resource.id}
                                resource={resource}
                                {...this.props}
                            />
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Okay</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default ResultView;

// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import TypeDataManager from './TypeDataManager';

// class ResourceModal extends Component {

//     componentDidMount() {
//         TypeDataManager.getTypes().then(types => {
//             this.setState({ types: types })
//         })
//     }

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
//                         <Button onClick={this.buildNewResource}>Add Resource</Button>{' '}
//                         <Button onClick={this.toggle}>Cancel</Button>
//                     </ModalFooter>
//                 </Modal>
//             </>
//         )
//     }

// }

// export default ResourceModal;