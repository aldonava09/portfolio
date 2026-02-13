import React from 'react';

function SkillsCard({ name, level, url }) {
  return (
    <div className="skills__item">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="skills__link"
      >
        {name}
      </a>

      <p className="skills__level">{level}</p>
    </div>
  );
}

export default SkillsCard;