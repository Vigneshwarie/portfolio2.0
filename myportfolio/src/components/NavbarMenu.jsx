import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/Navbar.css';
//import Home from '../pages/Home';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Awards from '../pages/Awards';
import Contact from '../pages/Contact';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import Fade from 'react-bootstrap/Fade';




function NavbarMenu() {
     const [activePage, setActivePage] = useState(false);
     const [open, setOpen] = useState(false);

     const renderPage = () => {
          switch (activePage) {
               case 'home':
                    return <About />;
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
                    return <About />;
          }
     };
     return (
          <>
               <Navbar expand="lg" className="custom-navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto">
                              <Nav.Link href="#home">Home</Nav.Link>
                              <Nav.Link href="#about" oni onClick={() => {
                                   setActivePage(null);
                                   setOpen(!open);
                                   setActivePage('about');
                              }} aria-controls="example-collapse-text"
        aria-expanded={open}>About</Nav.Link>
                              <Nav.Link href="#experience" onClick={() => { 
                                   setActivePage(null);
                                   setOpen(!open);
                                   setActivePage('experience');
                              }} aria-controls="example-collapse-text"
        aria-expanded={open}>Experience</Nav.Link>
                              <Nav.Link href="#projects" onClick={() => { 
                                   setActivePage(null);
                                   setOpen(!open);
                                   setActivePage('projects');
                              }} aria-controls="example-collapse-text"
        aria-expanded={open}>Projects</Nav.Link>
                              <Nav.Link href="#skills" onClick={() => {
                                   setActivePage(null);
                                   setOpen(!open);
                                   setActivePage('skills');
                              }} aria-controls="example-collapse-text"
        aria-expanded={open}>Skills</Nav.Link>
                              <Nav.Link href="#awards" onClick={() => {
                                   setActivePage(null);
                                   setOpen(!open);
                                   setActivePage('awards');
                               }} aria-controls="example-collapse-text"
        aria-expanded={open}>Awards</Nav.Link>
                              <Nav.Link href="#contact" onClick={() => {
                                   setActivePage(null);
                                   setOpen(!open);
                                   setActivePage('contact');
                               }} aria-controls="example-collapse-text"
        aria-expanded={open}>Contact</Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
               <div style={{ minHeight: '150px', padding:'5px' }} >
                    
                         <div id="example-collapse-text">
                              <Card body style={{ width: '800px', backgroundColor: '#222529', color: '#fff' }}>
                              {renderPage()}
                              </Card>
                         </div>
                    
               </div>
          </>   
     );
}

export default NavbarMenu;