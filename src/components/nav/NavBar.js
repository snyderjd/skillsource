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
                    <li className="nav-item dropdown">
                        <Link   to="/search" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link to="/video" className="nav-link">Videos</Link>
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

{/* NavBar with dropdown - allow user to select whether they want to search for skills within the app, youtube videos, or other web resources.
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
    </div>
</nav> */}
