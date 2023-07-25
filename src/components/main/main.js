import React from 'react';
import '../../styles/main/main.css';
import {Skills, skillsSet}  from './skills/skills';
import {Projects, projectsSet}  from './projects/projects';

function Main() {
  return (
    <section className="main">
        <Skills data={skillsSet}/>
        <Projects data={projectsSet}/>
    </section>
  );
}

export default Main;