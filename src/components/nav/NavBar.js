import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import UserDataManager from '../auth/UserDataManager';

class NavBar extends Component {
    state = {
        activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
        username: ""
    }

    componentDidMount() {
        this.setState({ username: this.props.username })
    }
    
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand d-flex justify-content-between">
                <h2 className="NavBar-heading">SkillSource</h2>
                <h3 className="NavBar-username">{this.props.username}</h3>
                <ul className="navbar-nav d-flex justify-content-end">
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={this.props.logout} to="/" className="nav-link">Logout</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
