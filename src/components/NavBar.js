import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/NavBar.css";

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export class NavBar extends Component {
    GetUserImg = () => {
        return (
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                <circle cx="15" cy="15" r="15" fill="#C4C4C4" />
                <circle cx="15" cy="15" r="15" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0" transform="translate(0 -0.231707) scale(0.0243902)" />
                    </pattern>
                    <image id="image0" width="41" height="60" href="data:image/jpeg;base64,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" />
                </defs>
            </svg>
        );
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" /*bg="light" variant="light"*/>
                <Navbar.Brand href="#home">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.97918 4.9792C3.40059 6.5578 2.14838 8.43186 1.29405 10.4944C0.439718 12.5569 -1.55236e-07 14.7675 0 17L17 17L4.97918 4.9792Z" fill="#333333" />
                        <path d="M17 0C14.0159 -3.55853e-08 11.0843 0.785506 8.5 2.27757L17 17L17 0Z" fill="#333333" />
                    </svg>
                    {' '}Blogger
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>*/}
                    </Nav>

                    <Nav>
                        <NavDropdown title="Add a Story" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#Add a Story">Add a Story</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Search">Search</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Help">Help</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Logout">Logout
                                <span class="float-right">
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 14L20 10M20 10L16 6M20 10H6.00001M12 14V15C12 15.7956 11.6839 16.5587 11.1213 17.1213C10.5587 17.6839 9.79566 18 9.00001 18H5.00001C2.99988 18 3.06249 18.0626 2.49988 17.5C1.93727 16.9374 2.00001 17 2.00001 15V5C2.00001 3 1.93727 3.06261 2.49988 2.5C3.06249 1.93739 3.00001 2 5.00001 2H9.00001C9.79566 2 10.5587 2.31607 11.1213 2.87868C11.6839 3.44129 12 4.20435 12 5V6" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </span>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#ProfilePic">
                            <span>
                                {this.GetUserImg()}
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;
