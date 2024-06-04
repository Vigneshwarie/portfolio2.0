import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Awards() {
     useEffect(() => {
          AOS.init();
     }, []
     );
     
     return (
          <section className="awards" >
               <div data-aos="fade-up" data-aos-delay="100">
                    <h3>Awards</h3>
                    <p>This is the awards page.</p>
               </div>
          </section>
     );
}

export default Awards;