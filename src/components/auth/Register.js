import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserDataManager from './UserDataManager';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    handleFieldChange = (event) => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    }

    render() {
        return (
            <div>
                 <Button onClick={this.toggle}>Register</Button>
                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                     <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
                     <ModalBody>
                         <form>
                             <fieldset>
                                 <div>
                                     <input onChange={this.handleFieldChange} type="email"
                                        id="email"
                                        placeholder="Email address"
                                        required
                                        autoFocus=""
                                    /><br />
                                    <input onChange={this.handleFieldChange} type="text"
                                        id="username"
                                        placeholder="Username"
                                        required
                                    /><br />
                                    <input onChange={this.handleFieldChange} type="password"
                                        id="password"
                                        placeholder="Password"
                                        required
                                    /><br />
                                    <input onChange={this.handleFieldChange} type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        required
                                    />
                                </div>
                            </fieldset>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.handleRegister}>Sign up</Button>{' '}
                        <Button onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

export default Register;


// import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import UserDataManager from './UserDataManager';
// import './Login.css';

// class RegisterModal extends React.Component {

//     componentDidMount() {
//         // getAll users and hand on
//         UserDataManager.getAllUsers()
//             .then(users => {
//                 this.setState({
//                     users: users
//                 })
//             })
//     }





//     handleRegister = event => {
//         event.preventDefault();
//         if (this.state.password !== this.state.confirmPassword) {
//             alert("Passwords do not match.")
//         } else if (this.state.users.find(user => user.username === this.state.username)) {
//             alert("Username already taken.")
//         } else if (this.state.users.find(user => user.email === this.state.email)) {
//             alert("This email address is already associated with an account.")
//         } else {
//             const newUserObject = {
//                 email: this.state.email,
//                 username: this.state.username,
//                 password: this.state.password
//             }
//             UserDataManager.postUser(newUserObject)
//                 .then(newRegisteredUser => sessionStorage.setItem("credentials", newRegisteredUser.id))
//                 .then(() => this.props.history.push("/chat"))
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <Button className="registerbtn" color="danger" onClick={this.toggle}>Register</Button>
//                 <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//                     <ModalHeader toggle={this.toggle}>Sign up</ModalHeader>
//                     <ModalBody>
//                         <form>
//                             <fieldset>
//                                 <div className="loginForm">
//                                     <input onChange={this.handleFieldChange} type="email"
//                                         id="email"
//                                         placeholder="Email address"
//                                         required
//                                         autoFocus=""
//                                     /><br />
//                                     <input onChange={this.handleFieldChange} type="text"
//                                         id="username"
//                                         placeholder="Username"
//                                         required
//                                     /><br />
//                                     <input onChange={this.handleFieldChange} type="password"
//                                         id="password"
//                                         placeholder="Password"
//                                         required
//                                     /><br />
//                                     <input onChange={this.handleFieldChange} type="password"
//                                         id="confirmPassword"
//                                         placeholder="Confirm Password"
//                                         required
//                                     />
//                                 </div>
//                             </fieldset>
//                         </form>
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary" onClick={this.handleRegister}>Sign up</Button>{' '}
//                         <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//                     </ModalFooter>
//                 </Modal>
//             </div>
//         );
//     }
// }

// export default RegisterModal;