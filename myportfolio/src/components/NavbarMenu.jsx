import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/Navbar.css';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Awards from '../pages/Awards';
import Contact from '../pages/Contact';
import Container from 'react-bootstrap/Container';


function NavbarMenu() {
     const [activePage, setActivePage] = useState(false);

     const renderPage = () => {
          switch (activePage) {
               case 'about':
                    return <About />;
               case 'experience':
                    return <Experience />;
               case 'projects':
                    return <Projects />;
               case 'skills':
                    return <Skills />;
               case 'awards':
                    return <Awards />;
               case 'contact':
                    return <Contact />;
               default:
                    return;
          }
     };
     return (
          <Container>
               <Navbar expand="lg" className="custom-navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav variant="underline" className="me-auto">
                              <Nav.Link href="#about" onClick={() => {
                                   setActivePage('about');
                              }}>About</Nav.Link>
                              <Nav.Link href="#experience" onClick={() => {
                                   setActivePage('experience');
                              }}>Experience</Nav.Link>
                              <Nav.Link href="#projects" onClick={() => {
                                   setActivePage('projects');
                              }}>Projects</Nav.Link>
                              <Nav.Link href="#skills" onClick={() => {
                                   setActivePage('skills');
                              }}>Skills</Nav.Link>
                              <Nav.Link href="#awards" onClick={() => {
                                   setActivePage('awards');
                              }}>Awards</Nav.Link>
                              <Nav.Link href="#contact" onClick={() => {
                                   setActivePage('contact');
                              }}>Contact</Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
               {renderPage()}
          </Container>   
     );
}

export default NavbarMenu;