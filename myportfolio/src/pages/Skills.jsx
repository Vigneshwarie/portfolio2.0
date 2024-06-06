import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';

function Skills() {
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
          <section className="content-section" data-aos="fade-up" data-aos-delay="100">
               <Container>
                    <h6>Skills</h6>
                    <div id="skills">
                         <h6>Full Stack</h6>
                         <ul>
                              <li>React JS, Node JS, Express JS, GraphQL, JavaScript, REST APIs, Jest, JWT, Mongoose ODM, HTML5, CSS, Bootstrap, jQuery, Ajax, Python, Java, J2EE, C#, .Net, SQL</li>
                         </ul>
                         <h6>Cloud</h6>
                         <ul>
                              <li>AWS, EC2, EKS, S3, RDS, IAM, GCP, Cloud Run</li>
                         </ul>
                         <h6>DevOps</h6>
                         <ul>
                              <li>Docker, Kubernetes, Jenkins</li>
                         </ul>
                         <h6>Databases</h6>
                         <ul>
                              <li>MongoDB, MSSQL, MySQL, Oracle</li>
                         </ul>
                         <h6>Low Code Platforms</h6>
                         <ul>
                              <li>OutSystems</li>
                         </ul>
                         <h6>Other Tools</h6>
                         <ul>
                              <li>Heroku, Render, Netlify, Git, Github</li>
                         </ul>
                         <h6>Project Management Skills</h6>
                         <ul>
                              <li>SDLC, Solution Design, Project Delivery, Customer Management, Budget, Audit & Governance</li>
                         </ul>
                    </div>
               </Container>
          </section>
     );
}

export default Skills;