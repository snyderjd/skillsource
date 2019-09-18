import React, { Component } from 'react';
import SkillDataManager from '../skills/SkillDataManager';
import ResourceDataManager from '../resources/ResourceDataManager';
import ResultView from './ResultView';

class HomeResult extends Component {
    state = {
        skill: {},
        resources: []
    }

    componentDidMount() {
        SkillDataManager.getSkill(this.props.result.id).then(skill => {
            ResourceDataManager.getResources(this.props.result.id).then(resources => {
                this.setState({
                    skill: skill,
                    resources: resources
                })
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="result-card">
                    <h3 className="ResultCard-heading">{this.props.result.name}</h3>
                    <p>Description: {this.props.result.description} </p>
                    <p>Times Copied: {this.props.result.timesCopied}</p>
                    <ResultView {...this.props} resources={this.state.resources} />
                </div>
            </React.Fragment>
        )
    }
}

export default HomeResult;