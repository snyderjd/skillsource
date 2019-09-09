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



    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleLogin}>
                    <fieldset>
                        <h3>Please Log In</h3>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                onChange={this.handleFieldChange}
                                type="email"
                                placeholder="Email address"
                                required
                                autoFocus=""
                            />
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={this.handleFieldchange}
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


// import React, { Component } from "react";
// import UserDataManager from "./UserDataManager";

// import "./Login.css";

// class Login extends Component {



//     handleLogin = event => {
//         event.preventDefault();
//         UserDataManager.checkUsers(this.state.email, this.state.password).then(
//             checkedUsers => {
//                 if (checkedUsers.length > 0) {
//                     sessionStorage.setItem("credentials", checkedUsers[0].id);
//                     this.props.history.push("/chat");
//                 } else {
//                     alert("Invalid email or password.");
//                 }
//             }
//         );
//     };

//     componentDidMount() {
//         // getAll users and hand on
//         UserDataManager.getAllUsers().then(users => {
//             this.setState({
//                 users: users
//             });
//         });
//     }
// }

// export default Login;