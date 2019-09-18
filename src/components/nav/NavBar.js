import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import UserDataManager from '../auth/UserDataManager';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
            username: ""
        };
    }

    componentDidMount() {
        this.setState({ username: this.props.username })
    }

    isAuthenticated = () => sessionStorage.getItem("activeUserId") !== null
    
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand d-flex justify-content-between">
                <img className="NavBar-logo" src={require('./Logo.png')} alt="SkillSource Logo"/>
                <ul className="navbar-nav d-flex justify-content-end">
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link">My Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item">
                        <h3 className="NavBar-username">{this.props.username}</h3>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/auth" className="nav-link">Login/Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={this.props.logout} to="/" className="nav-link">Logout</Link>
                    </li> */}

                    { this.isAuthenticated() ? 

                        <li className="nav-item">
                            <Link onClick={this.props.logout} to="/" className="nav-link">Logout</Link>
                        </li> :

                        <li className="nav-item">
                            <Link to="/auth" className="nav-link">Login/Register</Link>
                        </li>
                    }
                </ul>
            </nav>
        )
    }
}

export default NavBar;

// {
//     this.state.resources.map(resource =>
//         <ResourceCard
//             key={resource.id}
//             resource={resource}
//             deleteResource={this.deleteResource}
//             editResource={this.editResource}
//             {...this.props}
//         />
//     )
// }

{/* <h2 className="NavBar-heading">SkillSource</h2> */}




