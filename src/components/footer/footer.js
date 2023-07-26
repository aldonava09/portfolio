import React from 'react';
import '../../styles/footer/footer.css';
import Rings from '../../images/pattern-rings.svg';
import Contact from './contact/contact';
import NavbarFooter from './navbar_footer/navbar_footer';

function Footer() {
    let gitHubUrl = 'https://github.com/aldonava09';
    let linkedinUrl = 'https://www.linkedin.com/in/aldo-navarro-147b03282/';
    let whatsappUrl = 'https://wa.me/3121131976';

    return (
      <section className="footer" id='footer'>
        <img className='footer__rings' src={Rings} alt='Rings Decoration'/>
        <Contact/>
        <NavbarFooter githubLink={gitHubUrl} linkedinLink={linkedinUrl}  whatsappLink={whatsappUrl}/>
      </section>
    );
  }
  
export default Footer;