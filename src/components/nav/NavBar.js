import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserDataManager from '../auth/UserDataManager';

class NavBar extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
        username: ""
    }
    
    logout = () => {
        sessionStorage.clear();
    }

    componentDidMount() {
        UserDataManager.getUser(this.state.activeUserId).then(user => {
            this.setState({ username: user.username })
        })
    }

    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link onClick={this.logout} to="/">Logout</Link>
                    </li>
                </ul>
                <h3>{this.state.username}</h3>
                <h2>SkillSource</h2>
            </nav>
        )
    }
}

export default NavBar;


// import React, { Component } from "react"
// import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// class NavBar extends Component {

//     logout = () => {
//         sessionStorage.clear()
//     }

//     render() {
//         return (
//             <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
//                 <ul className="nav nav-pills nav-fill">
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/news">News</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/friends">Friends</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/chat">Chat</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/tasks">Tasks</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link className="nav-link" to="/events">Events</Link>
//                     </li>
//                     <li className="nav-item">
//                         <Link onClick={this.logout} className="nav-link" to="/">Logout</Link>
//                     </li>
//                 </ul>
//             </nav>
//         )
//     }
// }

// export default NavBar