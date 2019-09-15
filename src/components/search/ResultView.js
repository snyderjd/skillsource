import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import SkillDataManager from '../skills/SkillDataManager';
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
                <Button onClick={this.toggle} color="success">
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
                        <Button onClick={this.toggle} color="success">Okay</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }

}

export default ResultView;
