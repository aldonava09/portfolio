import React from 'react';
import '../../styles/footer/footer.css';
import Rings from '../../images/pattern-rings.svg';
import Contact from './contact/contact';
import NavbarFooter from './navbar_footer/navbar_footer';

function Footer() {
    return (
      <section className="footer">
        <img className='footer__rings' src={Rings} alt='Rings Decoration'/>
        <Contact/>
        <NavbarFooter/>
      </section>
    );
  }
  
export default Footer;