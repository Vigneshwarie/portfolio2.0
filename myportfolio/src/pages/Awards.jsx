import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Awards() {
     useEffect(() => {
          AOS.init();
     }, []
     );
     
     return (
          <section className="awards" >
               <Container data-aos="fade-up" data-aos-delay="100">
                    <div id="awards">
                         <p>This is the awards page.</p>
                    </div>
               </Container>
          </section>
     );
}

export default Awards;