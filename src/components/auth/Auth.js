import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

class Auth extends Component {

    render() {
        return (
            <React.Fragment>
                <Login {...this.props} />
                <Register {...this.props} />
            </React.Fragment>
        )
    }
}

export default Auth;

