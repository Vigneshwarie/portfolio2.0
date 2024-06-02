import Container from 'react-bootstrap/Container';

function Header() {
     return (
          <Container>
               <h1><a href="index.html">Vigneswari Sambandam</a></h1>
               <h3>a Master's graduate, passionate about designing and developing full-stack applications</h3>

               <nav id="navbar" class="navbar">
                    <ul>
                         <li><a class="nav-link active" href="#header">Home</a></li>
                         <li><a class="nav-link" href="#about">About</a></li>
                         <li><a class="nav-link" href="#experience">Experience</a></li>
                         <li><a class="nav-link" href="#projects">Projects</a></li>
                         <li><a class="nav-link" href="#skills">Skills</a></li>
                         <li><a class="nav-link" href="#awards">Awards</a></li>
                         <li><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
               </nav>

          </Container>
     );
}

export default Header;