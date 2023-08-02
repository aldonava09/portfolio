import React from 'react';
import '../../../styles/header/header-text/header-text.css';

function HeaderText({contactLink}) {
    return (
      <div className="header-text__container">
        <h1 className='header-text__title'>Nice to meet you! I’m <span className='header-text__title-name'>Aldo Navarro</span>.</h1>
        <p className='header-text__paragraph'>Based in México, I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <a className='header-text__link' href={contactLink}>CONTACT ME</a>
      </div>
    );
  }
  
  export default HeaderText;