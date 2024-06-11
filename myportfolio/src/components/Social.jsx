import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../assets/styles/Social.css';
import Tooltips from './Tooltips';


function Social() {
     return (
          <Container>
               <div className="social-links">
                    <Tooltips message={`GitHub`} children={<a href="https://github.com/Vigneshwarie/" className="github" target="_blank">
                         <i className="bi bi-github"></i>
                         </a>} />
                    <Tooltips message={`LinkedIn`} children={<a href="https://www.linkedin.com/in/vigneswari-sambandam-37b03730/" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>} />
               </div>
          </Container>
     );
}

export default Social;