import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Skills() {
     return (
          <section className="content-section">
               <Container data-aos="fade-up" data-aos-delay="100">
                    <h6>Skills</h6>
                    <div id="skills">
                         <p>This is the skills page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Skills;