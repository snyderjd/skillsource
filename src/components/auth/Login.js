import React, { Component } from 'react';
import UserDataManager from './UserDataManager';

class Login extends Component {
    state = {
        email: "",
        password: "",
        users: []
    };

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleLogin = (event) => {
        event.preventDefault();
        UserDataManager.checkUsers(this.state.email, this.state.password).then(checkedUsers => {
            if (checkedUsers.length > 0) {
                sessionStorage.setItem("activeUser", checkedUsers[0])
                this.props.history.push("/skills");
                console.log("successful login");
            } else {
                alert("Invalid email or password.");
            }
        })
    }

    componentDidMount() {
        // get all users and store in state
        UserDataManager.getAllUsers().then(users => {
            this.setState({
                users: users
            });
        });
    }

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <form onSubmit={this.handleLogin}>
                    <fieldset>
                        <h3>Please Log In</h3>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                onChange={this.handleFieldChange}
                                id="email"
                                type="email"
                                value={this.state.email}
                                placeholder="Email address"
                                required
                                autoFocus=""
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={this.handleFieldChange}
                                id="password"
                                value={this.state.password}
                                type="password"
                                placeholder="Password"
                                required 
                            />
                        </div>
                        <button type="submit">Sign In</button>
                        <p>Or</p>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }
}

export default Login;
