import React from 'react';
import '../../../styles/footer/navbar/navbar.css';
import gitHubIcon from '../../../images/icon-github.svg';
import linkedinIcon from '../../../images/icon-linkedin.svg';
import whatsappIcon from '../../../images/icon-whatsApp.png';

function NavbarFooter({githubLink, linkedinLink, whatsappLink}) {
    return (
      <div className="navbar_footer">
        <h3 className='navbar__name'>aldoNava</h3>
        <div className='navbar__links-container'>
            <a href={githubLink} target='_blank' rel='noopener noreferrer'><img className='navbar__link' src={gitHubIcon} alt='gitHub icon'/></a>
            <a href={linkedinLink} target='_blank' rel='noopener noreferrer'><img className='navbar__link' src={linkedinIcon} alt='linkedin icon'/></a>
            <a href={whatsappLink} target='_blank' rel='noopener noreferrer'><img className='navbar__link' src={whatsappIcon} alt='whatsapp icon'/></a>
        </div>
      </div>
    );
  }
  
  export default NavbarFooter;