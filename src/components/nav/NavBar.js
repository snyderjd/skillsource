import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
// import UserDataManager from '../auth/UserDataManager';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            activeUserId: parseInt(sessionStorage.getItem("activeUserId")),
            username: ""
        };
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    componentDidMount() {
        this.setState({ username: this.props.username })
    }
    
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand d-flex justify-content-between">
                <h2 className="NavBar-heading">SkillSource</h2>
                <ul className="navbar-nav d-flex justify-content-end">
                    <li className="nav-item">
                        <h3 className="NavBar-username">{this.props.username}</h3>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link">My Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search" className="nav-link">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/video" className="nav-link">Videos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/web" className="nav-link">Web</Link>
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



{/* <div>
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                                </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                                    </DropdownItem>
                        <DropdownItem>
                            Option 2
                                    </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    </Navbar>
</div> */}

