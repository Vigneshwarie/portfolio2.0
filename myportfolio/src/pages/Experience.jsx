import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
     useEffect(() => {
          AOS.init();
     }, []
     );

     return (
          <section className="experience">
               <Container data-aos="fade-up" data-aos-delay="100">
                    <div id="experience">
                         <p>This is the experience page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Experience;