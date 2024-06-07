import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';
import 'boxicons'



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
                                        <h4><a href="">Lorem Ipsum</a></h4>
                                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bxl-blogger"></i></div>
                                        <h4><a href="">Sed ut perspiciatis</a></h4>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-cloud-light-rain"></i></div>
                                        <h4><a href="">Magni Dolores</a></h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-task"></i></div>
                                        <h4><a href="">Nemo Enim</a></h4>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-message-square-edit"></i></div>
                                        <h4><a href="">Dele cardo</a></h4>
                                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                   </div>
                              </div>

                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                   <div className="icon-box">
                                        <div className="icon"><i className="bx bx-arch"></i></div>
                                        <h4><a href="">Divera don</a></h4>
                                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                   </div>
                              </div>
                         </div>
                    </Container>
               </div>
          </Container>
     );
}

export default Projects;