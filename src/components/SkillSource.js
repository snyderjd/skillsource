import React, { Component } from 'react';
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';
import UserDataManager from './auth/UserDataManager';
import './SkillSource.css';

class SkillSource extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
        username: ""
    }
    
    componentDidMount() {
        UserDataManager.getUser(this.state.activeUserId).then(user => {
            this.setState({ username: user.username })
        })
    }

    logout = () => {
        sessionStorage.clear();
        this.setState({ username: "" })
    }

    login = () => {
        this.setState({ activeUserId: sessionStorage.getItem("activeUserId")})
    }
    
    render() {
        return (
            <React.Fragment>
                <NavBar {...this.props} logout={this.logout} username={this.state.username} />
                <ApplicationViews login={this.login}/>
            </React.Fragment>
        )
    }
}

export default SkillSource;
