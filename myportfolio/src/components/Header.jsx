import Container from 'react-bootstrap/Container';
import '../assets/styles/Header.css';

function Header() {
     return (
          <Container className='container-position'>
               <header id="header">
                    <h1><a href="index.html">Vigneswari Sambandam</a></h1>
                    <h5>a Master's graduate, passionate about designing and developing full-stack applications</h5>
               </header>
          </Container>
     );
}

export default Header;