import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
     useEffect(() => {
          AOS.init();
     }, []
     );

     return (
          <>

               <div id="about" data-aos="fade-up" data-aos-delay="100">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
               </div>

          </>
     );
}

export default About;