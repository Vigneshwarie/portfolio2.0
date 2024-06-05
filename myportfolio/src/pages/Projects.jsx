import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';


function Projects() {
     useEffect(() => {
          AOS.init();
     }, []
     );

     return (
          <section className="content-section">
               <Container data-aos="fade-up" data-aos-delay="100">
                    <h6>Projects</h6>
                    <div id="projects">
                         <p>This is the projects page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Projects;