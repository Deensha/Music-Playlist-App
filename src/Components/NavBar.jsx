import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar" >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-name">
          Vibeflow🎶
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0">
            <Nav.Link as={Link} to="/" className="nav-link-item">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/playlist" className="nav-link-item">
              PlayList
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-item">
              About
            </Nav.Link>
          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;