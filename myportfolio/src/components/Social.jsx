import Container from 'react-bootstrap/Container';
import '../assets/styles/Social.css';


function Social() {
     return (
          <Container>
               <div className="social-links">
                    <a href="https://github.com/Vigneshwarie/" className="github" target="_blank"><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/vigneswari-sambandam-37b03730/" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
               </div>
          </Container>
     );
}

export default Social;