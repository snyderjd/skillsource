import React, { Component } from 'react';
import Login from './Login';
import './Auth.css';

class Auth extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="Auth-container">
                    <Login {...this.props} />
                </div>
            </React.Fragment>
        )
    }
}

export default Auth;

