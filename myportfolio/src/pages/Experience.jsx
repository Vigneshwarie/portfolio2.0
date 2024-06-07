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
                              <h4 className="resume-title"></h4>
                              <div className="resume-item">
                                   <h5>Technical Lead</h5>
                                   <h6>2015 - 2022</h6>
                                   <p><em>Enhanced Software Solutions, India </em></p>
                                   <ul>
                                        <li>Proven track record of successfully delivering projects from concept to completion.</li>
                                        <li>Delivered impactful solutions that significantly improved user engagement and satisfaction.</li>
                                        <li>Proven ability to effectively communicate complex technical concepts to stakeholders and team members, leading to a 25% increase in proposal acceptance.</li>
                                        <li>Oversaw a team of 20+ engineers, boosting team productivity by 35% and improving stakeholder satisfaction by 40% through regular business meetings and ensuring project alignment.</li>
                                        <li>Ensured 100% code quality compliance by conducting thorough code reviews and mentoring junior developers.</li>
                                        <li>Resolved 97% of technical issues within SLA, ensuring optimal performance and reliability.</li>
                                   </ul>
                              </div>
                              <div className="resume-item">
                                   <h5>Software Developer</h5>
                                   <h6>2011 - 2015</h6>
                                   <p><em>Enhanced Software Solutions, India </em></p>
                                   <ul>
                                        <li>Designed and developed a reporting system and contributed to process automation, cutting report preparation time by 80% and improving system usage with diverse reports and customizations using Java, Servlets, JSP, and Oracle PLSQL scripts.</li>
                                        <li>Developed and managed many critical applications for a leading healthcare firm in India, improving system performance by 50% with explain plan, partitions, and indexing in ORACLE SQL.</li>
                                        <li>Optimized long-run SQL jobs meeting 100% SLA and doubled CPU workload to increase the throughput.</li>
                                        <li>Improved project alignment by 30% by leading a team of 10+ engineers, conducting cross-functional meetings, and updating stakeholders on user story completion, features, and enhancement status.</li>
                                        <li>Ensured 100% test coverage by documenting comprehensive test plans, cases, scripts, procedures, and validations, and doubled CPU workload capacity by optimizing long-running SQL jobs, meeting 100% SLA requirements.</li>
                                        <li>Led the implementation of ISO/IEC 20000:2011 standards as the Lead Implementor at Enhanced Software Solutions.</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </Container>
     );
}

export default Experience;