import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Contact() {
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
          <Container className="content-section" data-aos="fade-up" data-aos-delay="100">
               <h6>Contact</h6>
               <div id="contact">
                    <p>Hello, and thank you for visiting my portfolio! I'm actively seeking opportunities for Staff Software Engineer, Technical Lead, or Senior Software Engineer roles. I'm excited about joining a dynamic team where I can contribute my expertise and passion for software development.</p>
                    <p>Whether you're a hiring manager, recruiter, or fellow developer interested in discussing potential collaborations or job opportunities, I'd love to hear from you. Feel free to contact me using the contact form below or via email <a href="mailto:vigneswari.sambandam@gmail.com"><b>here</b></a>. I prioritize responding promptly to all inquiries, so you can expect to hear back from me soon.
                    </p>
                    <p>Thank you for considering me for your team. I'm eager to discuss how my skills and experience align with your organization's needs and how I can help drive its success.</p>
                    <p>I am looking forward to connecting with you!</p>
               </div>
          </Container>
     );
}

export default Contact;