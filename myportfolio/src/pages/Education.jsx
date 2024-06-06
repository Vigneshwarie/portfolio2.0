import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Education() {
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
               <h6>Education</h6>
               <div id="education">
                    <Row>
                         <Col xs={12}>
                              <ul>
                                   <li><span className='highlight-font'>UC Berkeley </span>Certified  Full Stack Developer</li>
                                   <li><span className='highlight-font'>AWS Certified Cloud Practitioner</span></li>
                                   <li><span className='highlight-font'>Master of Science,</span> Information Technology, University of the Cumberlands, U.S. 2022 - 2024</li>
                                   <li><span className='highlight-font'>Bachelor of Engineering,</span> Computer Science, Anna University, India. 2002 - 2006.</li>
                                   <li>OutSystems Associate Reactive Developer O11 - Certificate ID # 0000000097059828</li>
                                   <li>Certified IT Service Management Foundation™ - Certificate ID # - 19344</li>
                                   <li>ITIL® Foundation Certificate in IT Service Management - Certification # GR671139701VS</li>
                              </ul>
                         </Col>
                    </Row>
               </div>
          </Container>
     );
}

export default Education;