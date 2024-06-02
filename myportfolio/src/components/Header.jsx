import Container from 'react-bootstrap/Container';
import NavbarMenu from "./NavbarMenu";

function Header() {
     return (
          <Container>
               <header id="header">
                    <h1><a href="index.html">Vigneswari Sambandam</a></h1>
                    <h3>a Master's graduate, passionate about designing and developing full-stack applications</h3>
                    <NavbarMenu/>
               </header>
          </Container>
     );
}

export default Header;