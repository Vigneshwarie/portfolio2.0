import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/styles/Header.css';

function Header() {
     return (
          <Row>
               <Col xs={12}>
                    <Container className="header">
                         <header id="header">
                              <h1><a href="index.html">Vigneswari Sambandam</a></h1>
                              <p>a Master's graduate, passionate about designing and developing full-stack applications</p>
                         </header>
                    </Container>
               </Col>
          </Row>
     );
}

export default Header;