import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';

import './SkillSource.css';

class SkillSource extends Component {
    

    

    render() {
        return (
            <React.Fragment>
                <NavBar {...this.props} />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default SkillSource;
