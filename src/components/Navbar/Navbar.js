import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Function to make navbar responsive
function NavBar() {
  return (
    <Navbar variant="dark" className="py-3 nav-container" expand="lg">
      <Container>
        <Navbar.Brand href="/home" className="logo">
          <h1>Vincent Yang</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/profile" className="nav-text">
              About Me
            </Link>
            <Link to="/projects" className="nav-text">
              Projects
            </Link>
            <Link to="/hobbies" className="nav-text">
              Hobbies
            </Link>
            <Link to="/contact" className="nav-text">
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
