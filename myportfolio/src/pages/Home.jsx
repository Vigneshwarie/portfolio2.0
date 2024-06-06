import Header from '../components/Header';
import NavbarMenu from '../components/NavbarMenu';
import Social from '../components/Social';

import Container from 'react-bootstrap/Container';
import '../assets/styles/Home.css';

function Home() {
     return (
          <Container className='homesection'>
               <Header />
               <NavbarMenu />
               <Social />
          </Container>
       
     );
}


export default Home; 