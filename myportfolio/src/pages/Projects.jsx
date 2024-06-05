import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Projects() {
     useEffect(() => {
          AOS.init();
     }, []
     );

     return (
          <section className="projects">
               <Container data-aos="fade-up" data-aos-delay="100">
                    <div id="projects">
                         <p>This is the projects page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Projects;