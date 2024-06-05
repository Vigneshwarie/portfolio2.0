import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
     return (
          <Row>
               <Col xs={12}>
                    <Container>
                         <header id="header" className="header">
                              <h1><Link to="/"  className='heading'>Vigneswari Sambandam</Link></h1>
                              <p>a Master's graduate, passionate about designing and developing full-stack applications</p>
                         </header>
                    </Container>
               </Col>
          </Row>
     );
}

export default Header;