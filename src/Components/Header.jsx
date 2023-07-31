import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
      {/* Header Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* Navbar Brand */}
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>

          {/* Navbar Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav Links */}
            <Nav className="me-auto">
              <Nav.Link href="/films">Films</Nav.Link>
              <Nav.Link href="/link">Link</Nav.Link>
              <Nav.Link href="/action">Action</Nav.Link>
              


              {/* Nav Dropdown */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    
  );
};

export default Header;
