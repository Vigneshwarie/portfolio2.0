import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/Navbar.css';
import '../assets/styles/CustomTransition.css';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Awards from '../pages/Awards';
import Contact from '../pages/Contact';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



function NavbarMenu() {
     const [activePage, setActivePage] = useState(false);

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
                    return <Contact />;
          }
     };
     return (
          <>
               <Navbar expand="lg" className="custom-navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto">
                              <Nav.Link href="#home">Home</Nav.Link>
                              <Nav.Link href="#about" onClick={() => setActivePage('about')}>About</Nav.Link>
                              <Nav.Link href="#experience" onClick={() => setActivePage('experience')}>Experience</Nav.Link>
                              <Nav.Link href="#projects" onClick={() => setActivePage('projects')}>Projects</Nav.Link>
                              <Nav.Link href="#skills" onClick={() => setActivePage('skills')}>Skills</Nav.Link>
                              <Nav.Link href="#awards" onClick={() => setActivePage('awards')}>Awards</Nav.Link>
                              <Nav.Link href="#contact" onClick={() => setActivePage('contact')}>Contact</Nav.Link>
                         </Nav>
                    </Navbar.Collapse>
               </Navbar>
               <TransitionGroup>
                    <CSSTransition
                    key={activePage}
                    timeout={300}
                    classNames="page"
                    >
                    {renderPage()}
                    </CSSTransition>
               </TransitionGroup>
          </>
         
     );
}

export default NavbarMenu;