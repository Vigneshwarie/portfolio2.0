import github_logo from '../assets/images/github-mark-white.png';
import linkedin_logo from '../assets/images/linkedIn-icon.png';
import '../assets/styles/Footer.css';

function Footer() {
     return (
          <footer className="footer">
               <p>
                    <small> &copy; Developed by Vigneswari Sambandam</small><br/>
               </p>
               
               <address>
                    <p><a href="https://github.com/Vigneshwarie/"><img src={github_logo} /></a>
                    <a href="https://www.linkedin.com/in/vigneswari-sambandam-37b03730/"><img src={linkedin_logo} /></a></p>
                </address>
          </footer>
     );
}

export default Footer;