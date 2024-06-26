import { useState, useEffect, useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Content.css';
import Social from '../components/Social';
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';
import AlertMessage from '../components/AlertMessage';
import Tooltips from '../components/Tooltips';

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

     const [showModal, setShowModal] = useState(false);
     const [popup, setPopup] = useState('');


     const form = useRef();
     const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
     const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
     const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

     const [username, setUserName] = useState('');
     const [email, setEmail] = useState('');
     const [message, setMessage] = useState('');
     const [errorMessage, setErrorMessage] = useState('');

     // This function will validate the form fields and display an error message if the form is invalid and sets back to original state
     const handleSubmit = (e) => {
          e.preventDefault();

          if (!username) {
               setErrorMessage('Please enter your name');
               return;
          } else if (!email || !validateEmail(email)) {
               setErrorMessage('Email is invalid or empty');
               return;
          } else if (!message) {
               setErrorMessage('Please enter your message');
               return;
          } 

          emailjs
               .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                         publicKey: PUBLIC_KEY,
                    })
               .then(
                    () => {
                         console.log('SUCCESS!');
                         setPopup('Thank you for your message. I will contact you soon!');
                         setShowModal(true);
                    },
                    (error) => {
                         console.log('FAILED...', error.text);
                    },
               );
          
          setUserName('');
          setEmail('');
          setMessage('');
     };

     // This function will handle the input change and set the state of the input fields
     const handleInputChange = (e) => { 
          const { name, value } = e.target;
          if (name === 'username') {
               setUserName(value);
          } else if (name === 'email') {
               setEmail(value);
          } else if (name === 'message') {
               setMessage(value);
          }
     }

     const handleCloseModal = () => {
          setShowModal(false);
     };
     
     return (
          <Container className="content-section" data-aos="fade-up" data-aos-delay="100">
               <section>
                    <h6>Contact</h6>
                    <div id="contact">
                         <p>Hello, and thank you for visiting my portfolio! I'm actively seeking opportunities for Staff Software Engineer, Technical Lead, or Senior Software Engineer roles. I'm excited about joining a dynamic team where I can contribute my expertise and passion for software development.</p>
                         <p>Whether you're a hiring manager, recruiter, or fellow developer interested in discussing potential collaborations or job opportunities, I'd love to hear from you. Feel free to contact me using the contact form below or via email <a href="mailto:vigneswari.sambandam@gmail.com"><b>here</b></a>. I prioritize responding promptly to all inquiries, so you can expect to hear back from me soon.
                         </p>
                         <p>Thank you for considering me for your team. I'm eager to discuss how my skills and experience align with your organization's needs and how I can help drive its success.</p>
                         <p>I am looking forward to connecting with you!</p>
                    </div>
               </section>
               
               <section>
                    <div className="row mt-2">
                         <div className="col-md-6 mt-4 d-flex align-items-stretch">
                              <div className="info-box">
                                   <i className="bx bx-share-alt"></i>
                                   <h3>Social Profiles</h3>
                                   <Social />
                              </div>
                         </div>

                         <div className="col-md-6 mt-4 d-flex align-items-stretch">
                              <div className="info-box">
                                   <i className="bx bxs-contact"></i>
                                   <h3>Email &amp; Phone</h3>
                                   <div className="contact">
                                        <Tooltips message="Email" children ={<a href="mailto:vigneswari.sambandam@gmail.com" className="envelope"><i className="bi bi-envelope"></i></a>} position="bottom"/>
                                        <Tooltips message="Phone" children={<a href="tel:+15136154472" className="telephone-inbound"><i className="bi bi-telephone-inbound"></i></a>} position="bottom"/>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <section>
                    <div>
                         <Form className="frm" onSubmit={handleSubmit} ref={form}>
                              <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                                   <Form.Label column sm={1} className="lbl">
                                        Name
                                   </Form.Label>
                                   <Col sm={4}>
                                        <Form.Control type="text" placeholder="Your Name" name="username" onChange={handleInputChange} value={username}/>
                                   </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                   <Form.Label column sm={1} className="lbl">
                                        Email
                                   </Form.Label>
                                   <Col sm={4}>
                                        <Form.Control type="email" placeholder="Your Email" name="email"  onChange={handleInputChange} value={email}/>
                                   </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3" controlId="formHorizontalMessage">
                                   <Form.Label column sm={1} className="lbl">
                                        Message
                                   </Form.Label>
                                   <Col sm={4}>
                                        <Form.Control as="textarea" rows={4} placeholder="Your Message" name="message" onChange={handleInputChange} value={message}/>
                                   </Col>
                              </Form.Group>
                              <Form.Group as={Row} className="mb-3">
                                   <Col sm={3}>
                                        <Button type="submit" className="btn">Submit</Button>
                                        <AlertMessage show={showModal} message={popup} onClose={handleCloseModal} />
                                   </Col>
                              </Form.Group>
                         </Form>
                         {
                              errorMessage && (
                                   <div>
                                        <p className="error-text">{errorMessage}</p>
                                   </div>
                              )
                         }
                    </div>
               </section>
          </Container>
     );
}

export default Contact;