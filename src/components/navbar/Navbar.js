import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {Container} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"

function NavBar() {
  return (
<Navbar collapseOnSelect expand="lg" variant="dark" id="customNav" fixed="top">
  <Container>
  <Navbar.Brand href="#home">Maximilian Rosales</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    {/* <Nav.Link href="#deets">Night Mode</Nav.Link> */}
    </Nav>
    <Nav>
    <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar;