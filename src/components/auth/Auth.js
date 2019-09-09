import React, { Component } from 'react';

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

