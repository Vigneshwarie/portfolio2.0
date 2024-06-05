import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Awards() {
     useEffect(() => {
          AOS.init();
     }, []
     );
     
     return (
          <section className="content-section" >
               <Container data-aos="fade-up" data-aos-delay="100">
                    <h6>Awards</h6>
                    <div id="awards">
                         <ul>
                              <li><span className="highlight-font">Abbott Healthcare Award</span> - for successful implementation of  Salesportal Migration  - 2018</li>
                              <li><span className="highlight-font">Enhanced Software Solutions Award</span> - for Implementing ISO standards & ISO Certification - 2014 </li>
                              <li><span className="highlight-font">Orange Business Services (OBS) Award </span> - for Successful iBid project Implementation - 2012</li>
                              <li><span className="highlight-font">Star Performer Award </span> - for the year at Enhanced Software Solutions Pvt. Ltd. - 2012</li>
                              <li><span className="highlight-font">Rookie Award </span> - for the year at Enhanced Software Solutions Pvt. Ltd. - 2010</li>
                         </ul>
                    </div>
               </Container>
          </section>
     );
}

export default Awards;