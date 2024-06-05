import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
     useEffect(() => {
          AOS.init();
     }, []
     );

     return (
           <section className="about" >
               <Container data-aos="fade-up" data-aos-delay="100">
                    <div id="about">
                         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                         terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                         labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
               </Container>
          </section>
     );
}

export default About;