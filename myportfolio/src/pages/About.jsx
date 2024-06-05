import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function About() {
     useEffect(() => {
          AOS.init();
     }, []
     );

     return (
           <section className="content-section" >
               <Container data-aos="fade-up" data-aos-delay="100">
                    <h6>About</h6>
                    <div id="about">
                         This is Vigneswari Sambandam, aka Viggy, an accomplished IT professional with 10+ years of experience developing and architecting IT applications across industries with a proven track record of delivering value to Healthcare, Telecom, and Service Industries businesses. I wanted to upskill myself and embrace the changes and happenings in recent years in IT. Hence, I recently completed a master’s in information technology, further enhancing software development and project management skills. I also graduated from UC Berkeley and completed Coding Bootcamp for additional skills. Apart from work and studies, I love watching movies, listening to music, and sometimes reading books. I empathize with people and hate all kinds of discrimination against individuals.
                    </div>
               </Container>
          </section>
     );
}

export default About;