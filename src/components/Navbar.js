import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavbarMenu() {
  const customStyles = {
    backgroundColor: '#00246B', // Replace with your custom color code
    // Add any additional styles as needed
  };
  return (
    <Navbar expand="lg" style= {customStyles}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: '#FFF' }}>Sur Saathi</Navbar.Brand> {/* Set the text color here */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: '#FFF' }}>Home</Nav.Link> {/* Set the text color here */}
            <Nav.Link href="#link" style={{ color: '#FFF' }}>Browse</Nav.Link> {/* Set the text color here */}
            {/* <NavDropdown title="Options" style={{ color: '#fff' }}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMenu;
