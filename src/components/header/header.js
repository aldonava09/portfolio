import React from 'react';
import '../../styles/header/header.css';
import Navbar from './navbar/navbar';
import Rings from '../../images/pattern-rings.svg';
import HeaderText from './header-text/header-text';
import ProfileImage from './profile-image/profile-image';

function Header() {
    let gitHubUrl = 'https://github.com/aldonava09';
    let linkedinUrl = 'https://www.linkedin.com/in/aldo-navarro-147b03282/';
    let whatsappUrl = 'https://wa.me/3121131976';
    
    return (
      <section className="header">
        <Navbar githubLink={gitHubUrl} linkedinLink={linkedinUrl}  whatsappLink={whatsappUrl}/>
        <img className='header__rings' src={Rings} alt='Rings Decoration'/>
        <ProfileImage/>
        <HeaderText contactLink={'#footer'}/>
      </section>
    );
  }
  
  export default Header;