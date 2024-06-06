import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Experience() {
     useEffect(() => {
          AOS.init({
               disable: "mobile",
               duration: 600, 
               once: true,     
               mirror: false,
          });
          AOS.refresh();
     }, []
     );

     return (
          <section className="content-section" data-aos="fade-up" data-aos-delay="100">
               <Container>
                    <h6>Experience</h6>
                    <div id="experience">
                         <p>This is the experience page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Experience;