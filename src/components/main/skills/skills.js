import React from 'react';
import SkillsCard from './__card/skills__card';
import '../../../styles/main/skills/skills.css';
import Rings from '../../../images/pattern-rings.svg';
import htmlLogo from '../../../images/html-logo.png';
import cssLogo from '../../../images/css-logo.png';
import jsLogo from '../../../images/javascript-logo.png';
import reactLogo from '../../../images/react-logo.svg';
import gitLogo from '../../../images/git-logo.png';
import sqlLogo from '../../../images/sql-logo.png';
import webpackLogo from '../../../images/webpack-logo.png';
import boostrapLogo from '../../../images/bootstrap-logo.svg';

const skillsSet = [
    {
      logo: htmlLogo,
      name: 'HTML',
      experience: '2 year experience',
      isBlack: true
    },
    {
      logo: cssLogo,
      name: 'CSS',
      experience: '1 year experience',
      isBlack: false
    },
    {
      logo: jsLogo,
      name: 'JAVASCRIPT',
      experience: '1 year experience',
      isBlack: false
    },
    {
      logo: reactLogo,
      name: 'REACT',
      experience: '1 year experience',
      isBlack: true
    },
    {
      logo: gitLogo,
      name: 'GIT',
      experience: '1 year experience',
      isBlack: false
    },
    {
      logo: sqlLogo,
      name: 'SQL',
      experience: '3  months experience',
      isBlack: true
    },    
    {
      logo: webpackLogo,
      name: 'WEBPACK',
      experience: '6 months experience',
      isBlack: true
    },
    {
      logo: boostrapLogo,
      name: 'BOOSTRAP',
      experience: '4 months experience',
      isBlack: true
    }
]

function Skills({ data }) {
    return (
        <section className="skills">
            <h2 className='skills__title'>Skills</h2>
            <img className='skills__rings' src={Rings} alt='Rings Decoration'/>
            <div className='skills__cards-container'>
                {data.map((item, index) => (
                <SkillsCard key={index} logo={item.logo} name={item.name} experience={item.experience} isBlack={item.isBlack} />
                ))}
            </div>
        </section>
    )
}

export {Skills, skillsSet};