import React from 'react';
import Card from './__card/projects__card';
import '../../../styles/main/projects/projects.css';
import Rings from '../../../images/pattern-rings.svg';
import retailImg from '../../../images/retail-dashboard.png';
import revenueDriversImg from '../../../images/revenue-drivers-dashboard.png';
import lendingPortfolioImg from '../../../images/lending-portfolio-dashboard.png';


const projectsSet = [
  {
    image: retailImg,
    name: 'Retail Sales Performance Analysis',
    technologies: 'Excel | KPI Development | Sales Analysis',
    projectLink: 'https://github.com/aldonava09/portfolio-data-analyst/tree/main/01-excel',
    codeLink: 'https://github.com/aldonava09/portfolio-data-analyst',
    projectDescription:
      'Sales performance analysis focused on identifying revenue trends, category performance, and key business KPIs. Developed structured Excel dashboards to support data-driven commercial decisions.'
  },
  {
    image: revenueDriversImg,
    name: 'Product Revenue Drivers Analysis',
    technologies: 'SQL | Power BI | Data Validation | KPI Modeling',
    projectLink: 'https://github.com/aldonava09/portfolio-data-analyst/tree/main/02-sql-powerbi',
    codeLink: 'https://github.com/aldonava09/portfolio-data-analyst',
    projectDescription:
      'Business-oriented SQL analysis to identify whether revenue is driven by pricing or sales volume. Includes data validation, metric modeling, and executive dashboard visualization in Power BI.'
  },
  {
    image: lendingPortfolioImg,
    name: 'Lending Portfolio Risk & Profitability Analysis',
    technologies: 'Python | PostgreSQL | SQL | Power BI | Data Modeling',
    projectLink: 'https://github.com/aldonava09/portfolio-data-analyst/tree/main/03-sql-python-powerbi',
    codeLink: 'https://github.com/aldonava09/portfolio-data-analyst',
    projectDescription:
      'End-to-end financial portfolio analysis using Lending Club data. Included ETL with Python, relational modeling in PostgreSQL (3NF), risk and ROI evaluation, and executive dashboard development.'
  }
];


function Projects({ data }) {
    return (
        <section className="projects">
            <h2 className='projects__title'>Data Projects</h2>
            <a 
  className='projects__link' 
  href="https://github.com/aldonava09" 
  target="_blank" 
  rel="noopener noreferrer"
>
  VIEW ALL PROJECTS
</a>
            <img className='projects__rings_top' src={Rings} alt='Rings Decoration'/>
            <div className='projects__cards-container'>
                {data.map((item, index) => (
                <Card key={index} image={item.image} projectName={item.name} technologies={item.technologies} projectLink={item.projectLink} codeLink={item.codeLink} projectDescription={item.projectDescription}/>
                ))}
            </div>
            <img className='projects__rings_bottom' src={Rings} alt='Rings Decoration'/>    
        </section>
    )
}

export {Projects, projectsSet};