import React from 'react';

function SkillsCard({ logo, name, experience, isBlack}) {
    return (
      <div className="skills__card">
        <img className={`skills__card-logo ${isBlack ? 'skills__card-logo_white' : ''}`} src={logo} alt={name + " Logo"} />
        <div className="skills__card-text">
          <h3 className="skills__card-header">{name}</h3>
          <p className="skills__card-paragraph">{experience}</p>
        </div>
      </div>
    );
}

export default SkillsCard;