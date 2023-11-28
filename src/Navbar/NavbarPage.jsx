import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavbarPage() {
  return (
    <div>
       <Navbar expand="lg" className="navSticky" bg="dark" data-bs-theme="dark" >
      <Container fluid>
        <Navbar.Brand >Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            // navbarScroll
          >
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Car">Car</Nav.Link>
            <Nav.Link as={Link} to="/Bike">Bike</Nav.Link>
            <Nav.Link as={Link} to="/SignUp">SignUp</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarPage