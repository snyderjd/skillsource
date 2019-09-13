import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link onClick={this.props.logout} to="/">Logout</Link>
                    </li>
                </ul>
                <h3>{this.props.username}</h3>
                <h2>SkillSource</h2>
            </nav>
        )
    }
}

export default NavBar;
