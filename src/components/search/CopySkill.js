import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CopySkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            activeUserId: parseInt(sessionStorage.getItem("activeUserId"))
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    cloneSkill = (event) => {
        event.preventDefault();
        console.log(this.props);

        const newSkill = {
            name: this.props.skill.name,
            userId: this.state.activeUserId,
            description: this.props.skill.description,
            isComplete: false,
            isOriginal: false,
            timesCopied: 0
        }

        this.props.copySkill(newSkill).then(this.toggle);
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

    render() {
        return (
            <>
                <Button onClick={this.toggle}>
                    Add Skill
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Skill</ModalHeader>
                    <ModalBody>
                        Are you sure you want to copy this skill and all of its associated resources?
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.cloneSkill}>Yes</Button>
                        <Button onClick={this.toggle}>No</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default CopySkill;

// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import SkillDataManager from '../skills/SkillDataManager';
// import ResultResource from './ResultResource';

// class ResultView extends Component {

//     render() {
//         return (
//             <>
//                 <Button onClick={this.toggle}>
//                     View Resources
//                 </Button>
//                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                     <ModalHeader toggle={this.toggle}>Resources</ModalHeader>
//                     <ModalBody>
//                         {this.props.resources.map(resource =>
//                             <ResultResource
//                                 key={resource.id}
//                                 resource={resource}
//                                 {...this.props}
//                             />
//                         )}
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button onClick={this.toggle}>Okay</Button>
//                     </ModalFooter>
//                 </Modal>
//             </>
//         )
//     }

// }

// export default ResultView;