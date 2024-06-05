import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
     useEffect(() => {
          AOS.init();
     }, []
     );
     
     return (
          <section className="contact">
               <Container data-aos="fade-up" data-aos-delay="100">
                    <div id="contact">
                         <p>This is the contact page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Contact;