import React from 'react';
import SkillsCard from './__card/skills__card';
import '../../../styles/main/skills/skills.css';

const skillsSet = [
  {
    name: 'EXCEL',
    level: 'Advanced',
    url: 'https://www.microsoft.com/en/microsoft-365/excel'
  },
  {
    name: 'SQL',
    level: 'Advanced',
    url: 'https://www.postgresql.org/'
  },
  {
    name: 'PYTHON',
    level: 'Intermediate',
    url: 'https://www.python.org/'
  },
  {
    name: 'POWER BI',
    level: 'Advanced',
    url: 'https://powerbi.microsoft.com/'
  },
  {
    name: 'LOOKER STUDIO',
    level: 'Intermediate',
    url: 'https://lookerstudio.google.com/'
  },
  {
    name: 'DAX',
    level: 'Advanced',
    url: 'https://lookerstudio.google.com/'
  }
];

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__title">Data & Analytics Stack</h2>

      <div className="skills__cards-container">
        {skillsSet.map((item, index) => (
          <SkillsCard
            key={index}
            name={item.name}
            level={item.level}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}

export { Skills, skillsSet };
