import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Education() {
     useEffect(() => {
          AOS.init();
     }, []
     );

     return (
          <section className="content-section">
               <Container data-aos="fade-up" data-aos-delay="100">
                    <div id="education">
                         <p>This is the education page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Education;