import React from 'react';
import '../../styles/main/main.css';
import {Skills, skillsSet}  from './skills/skills';

function Main() {
  return (
    <section className="main">
        <Skills data={skillsSet}/>
    </section>
  );
}

export default Main;