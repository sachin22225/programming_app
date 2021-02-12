import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/NavBar.css";
import BloggerLogo from './media/BloggerLogo.svg'
import UserImg from './media/UserImg.svg'

// import LogoutIcon from './media/LogoutIcon.svg'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export class NavBar extends Component {
    constructor() {
        super();
        this.dropDownRef = React.createRef();
        this.state = {
            windowWidth: window.innerWidth
        }
    }


    isDropDownOpen = false;

    getLogoutSVG = () => {
        return (
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="logoutIcon" d="M16 14L20 10M20 10L16 6M20 10H6.00001M12 14V15C12 15.7956 11.6839 16.5587 11.1213 17.1213C10.5587 17.6839 9.79566 18 9.00001 18H5.00001C2.99988 18 3.06249 18.0626 2.49988 17.5C1.93727 16.9374 2.00001 17 2.00001 15V5C2.00001 3 1.93727 3.06261 2.49988 2.5C3.06249 1.93739 3.00001 2 5.00001 2H9.00001C9.79566 2 10.5587 2.31607 11.1213 2.87868C11.6839 3.44129 12 4.20435 12 5V6"
                    stroke="#828282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }

    DropdownClick = () => {
        if (this.isDropDownOpen)
            this.isDropDownOpen = false
        else
            this.isDropDownOpen = true

    }
    openDropdown = () => {
        if (!this.isDropDownOpen) {
            this.dropDownRef.current.firstChild.click();
        }
    }

    closeDropdown = () => {
        if (this.isDropDownOpen) {
            this.dropDownRef.current.firstChild.click();
        }
    }

    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }


    // componentWillUnmount() {
    //     document.removeEventListener("resize", this.handleResize);
    // }

    render() {
        return (

            <Navbar collapseOnSelect expand="sm" /*bg="light" variant="light"*/ >
                <Navbar.Brand href="#home">
                    <img src={BloggerLogo} alt="logo" />{' '}Blogger
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">features</Nav.Link> */}
                    </Nav>

                    <Nav>
                        <NavDropdown title="Add a Story" id="collasible-nav-dropdown"
                            onMouseEnter={(this.state.windowWidth > 575) ? this.openDropdown : null}
                            onMouseLeave={(this.state.windowWidth > 575) ? this.closeDropdown : null}
                            ref={this.dropDownRef}
                            onClick={(this.state.windowWidth > 575) ? this.DropdownClick : null}

                        >
                            <NavDropdown.Item href="#Add a Story">Add a Story</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Search">Search</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Help">Help</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#Logout">Logout
                                <span className="float-right">
                                    {this.getLogoutSVG()}
                                    {/* <img src={LogoutIcon} alt="User Img" /> */}
                                </span>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#ProfilePic">
                            <span>
                                <img src={UserImg} alt="User Img" />
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        )
    }
}

export default NavBar;
