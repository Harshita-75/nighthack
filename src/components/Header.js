// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-warning font-weight-bold">
          {/* <img
            // src="https://via.placeholder.com/30"
            alt="Logo"
            className="d-inline-block align-top mr-2"
          /> */}
          Braille Conversion Tool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">About</Nav.Link>
            <Nav.Link as={Link} to="/features" className="text-white">Features</Nav.Link>
            <Nav.Link as={Link} to="/convert" className="text-white">Convert</Nav.Link>
            <NavDropdown title="More" id="nav-dropdown" className="text-white">
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/support">Support</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
