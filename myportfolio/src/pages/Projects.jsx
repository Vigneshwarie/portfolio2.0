import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';
import 'boxicons';



function Projects() {
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
               <h6>Projects</h6>
               <div id="projects">
                    <Container>
                         <div className="row">
                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bxs-cat"></i></div>
                                        <h4>Munch Monitor</h4>
                                        <Row>
                                             <Col><a href="https://github.com/Vigneshwarie/munchMonitor" target='_blank'><i class='bx bxl-github'></i></a></Col>
                                             <Col><a href="https://munchmonitor-641029a8a248.herokuapp.com/" target='_blank'><i class='bx bx-link-external'></i></a></Col>
                                        </Row>
                                        <p>An application that helps the user track and monitor their pet's food.</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-blogger"></i></div>
                                        <h4>Narrative Nest</h4>
                                        <Row>
                                             <Col><a href="https://github.com/Vigneshwarie/VSNarrativeNest" target='_blank'><i class='bx bxl-github'></i></a></Col>
                                             <Col><a href="https://vs-narrative-nest-75a09defd366.herokuapp.com/" target='_blank'><i class='bx bx-link-external'></i></a></Col>
                                        </Row>
                                        <p>A CMS-style blog for users to publish their blog posts and comment on other user's posts</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-cloud-light-rain"></i></div>
                                        <h4>vEather Forecasting</h4>
                                        <Row>
                                             <Col><a href="https://github.com/Vigneshwarie/vEatherForecasting" target='_blank'><i class='bx bxl-github'></i></a></Col>
                                             <Col><a href="https://vigneshwarie.github.io/vEatherForecasting/" target='_blank'><i class='bx bx-link-external'></i></a></Col>
                                        </Row>
                                        <p>An application that displays weather forecasts for five(5) days for selected cities and retains search history</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-task"></i></div>
                                        <h4>Task Manager</h4>
                                        <Row>
                                             <Col><a href="https://github.com/Vigneshwarie/G6-Task-Manager" target='_blank'><i class='bx bxl-github'></i></a></Col>
                                             <Col><a href="https://vigneshwarie.github.io/G6-Task-Manager/" target='_blank'><i class='bx bx-link-external'></i></a></Col>
                                        </Row>
                                        <p>A simple application to manage and monitor everyday tasks and activities</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-message-square-edit"></i></div>
                                        <h4>Note Keeper</h4>
                                        <Row>
                                             <Col><a href="https://github.com/Vigneshwarie/VS-Notes-Keeper" target='_blank'><i class='bx bxl-github'></i></a></Col>
                                             <Col><a href="https://vs-notes-keeper-b09b3efbcb78.herokuapp.com/" target='_blank'><i class='bx bx-link-external'></i></a></Col>
                                        </Row>
                                        <p>A simple note-keeper application to manage and monitor everyday tasks and activities</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-arch"></i></div>
                                        <h4>Quizlathon</h4>
                                        <Row>
                                             <Col><a href="https://github.com/Vigneshwarie/JS-Quizlathon" target='_blank'><i class='bx bxl-github'></i></a></Col>
                                             <Col><a href="https://vigneshwarie.github.io/JS-Quizlathon/" target='_blank'><i class='bx bx-link-external'></i></a></Col>
                                        </Row>
                                        <p>A quiz app with a timer tracks scores while presenting timed multiple-choice questions</p>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </Container>
     );
}

export default Projects;