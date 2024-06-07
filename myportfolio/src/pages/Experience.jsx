import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Experience() {
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
               <h6>Experience</h6>
               <div id="experience">
                    <div className="row">
                         <div className="col-lg-12">
                              <h4 className="resume-title">Professional Experience</h4>
                              <div className="resume-item">
                                   <h5>Technical Lead</h5>
                                   <h6>2015 - 2022</h6>
                                   <p><em>Enhanced Software Solutions, India </em></p>
                                   <p>
                                        <ul>
                                             <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                             <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                             <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                             <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                        </ul>
                                   </p>
                              </div>
                              <div className="resume-item">
                                   <h5>Software Developer</h5>
                                   <h6>2011 - 2015</h6>
                                   <p><em>Enhanced Software Solutions, India </em></p>
                                   <p>
                                        <ul>
                                             <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                             <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                             <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                             <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                        </ul>
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </Container>
     );
}

export default Experience;