import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
     useEffect(() => {
          AOS.init();
     }, []
     );
     
     return (
          <section className="contact">
               <div data-aos="fade-up" data-aos-delay="100">
                    <h3>Contact</h3>
                    <p>This is the contact page.</p>
               </div>
          </section>
     );
}

export default Contact;