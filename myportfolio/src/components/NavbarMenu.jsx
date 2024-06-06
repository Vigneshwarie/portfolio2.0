import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import Container from 'react-bootstrap/Container';


function NavbarMenu() {
     const currentPage = useLocation().pathname;
     return (
          <Container>
               <Navbar collapseOnSelect={true} expand="lg" className="custom-navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav variant="underline" className="">
                              <Nav.Link as={Link} to="/" eventKey="/">Home</Nav.Link>
                              <Nav.Link as={Link} to="/About" eventKey="/About">About</Nav.Link>
                              <Nav.Link as={Link} to="/Experience" eventKey="/Experience">Experience</Nav.Link>
                              <Nav.Link as={Link} to="/Projects" eventKey="/Projects">Projects</Nav.Link>
                              <Nav.Link as={Link} to="/Skills" eventKey="/Skills">Skills</Nav.Link>
                              <Nav.Link as={Link} to="/Awards" eventKey="/Awards">Awards</Nav.Link>
                              <Nav.Link as={Link} to="/Contact" eventKey="/Contact">Contact</Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
          </Container>   
     );
}

export default NavbarMenu;