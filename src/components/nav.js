import React from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavDropdown, Container} from 'react-bootstrap'
const Navs = () => {
    return (
    <Container>
        <Navbar bg="" expand="lg">
        
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                            <Link to="/">Home</Link>
                </Nav.Link>
               
                <NavDropdown title="About" id="basic-nav-dropdown">
                    <NavDropdown.Item>Orgnizers</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Sponsors/Partners</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link>
                    <Link to="/blueeconomy">Blue Economy</Link>
                </Nav.Link>
              
                <NavDropdown title="BE Ideas" id="basic-ideas">
                    <NavDropdown.Item>
                       <Link to="/beideas/bestartups">BE Startups</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Small Scale</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Medium Scale</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Large Scale</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="BE Tracks" id="basic-tracks">
                    <NavDropdown.Item href="#action/3.1">Incubation Tracks</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Funding Orgnizations</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Business Competition</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Inernational Universities</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">FAQS</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link>
                         <Link to="/bechallenge/bechallenge">BE Challenege 2021</Link>
                </Nav.Link>
                <Nav.Link>
                     <Link to="/ideathon/idea">Ideathon</Link>
                </Nav.Link>

                <Nav.Link>
                    <Link to="/resources">Resources</Link>
                </Nav.Link>
              
                <Nav.Link href="#link">Signup</Nav.Link>
                <Nav.Link href="#link">Contact US</Nav.Link>

                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
        </Container>
    )
}

export default Navs
