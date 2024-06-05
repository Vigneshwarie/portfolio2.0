import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
     return (
          <section className="skills">
               <Container data-aos="fade-up" data-aos-delay="100">
                    <div id="skills">
                         <p>This is the skills page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Skills;