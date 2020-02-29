import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function NavbarComponent(){
    return(
        <Navbar fixed="top" expand="lg" className = "custom-style">
            <Navbar.Brand href="#home">
            MediQuick
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className = "headings">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Search</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
                </Nav>

                <Nav>
                    <Nav.Link href="#">Sign Up</Nav.Link>
                    <Nav.Link eventKey={2} href="#">Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <style jsx global>{`
                .custom-style{
                    background-color: #505d58;
                    height: 70px;
                    font-size: 15px;
                    letter-spacing: 2px;
                    font-family: Poppins;
                }
                .navbar-light .navbar-nav .nav-link {
                    color: rgb(255, 255, 255);
                }
                .navbar-light .navbar-brand {
                    color: rgb(255, 255, 255);
                    font-size: 25px;
                    letter-spacing: 6px;
                }
            `}</style>
        </Navbar>
    );
} 


export default NavbarComponent;