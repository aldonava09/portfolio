import React from 'react';
import Card from './__card/projects__card';
import '../../../styles/main/projects/projects.css';
import Rings from '../../../images/pattern-rings.svg';
import artPageImg from '../../../images/proyecto-pagina-galeria-arte.png';
import socialMediaImg from '../../../images/proyecto-red-social.png';
import agencyPageImg from '../../../images/proyecto-pagina-agencia.png';
import landingPageBlogImg from '../../../images/proyecto-pagina-blog.png';

const projectsSet = [
    {
      image: artPageImg,
      name: 'ART GALERY PAGE',
      technologies: 'HTML-CSS',
      projectLink: 'https://aldonava09.github.io/Pagina-de-patria-a-patria/',
      codeLink: 'https://github.com/aldonava09/Pagina-de-patria-a-patria',
      projectDescription:'"De patria a patria" project is a one-page website, which functions as the contact for a photo gallerying. It has been designed with the objective of practicing the use of HTML, CSS and responsive design, making sure that all elements display correctly on the most common screen sizes.'
    },
    {
      image: socialMediaImg,
      name: 'SOCIAL MEDIA PROYECT',
      technologies: 'HTML-CSS-JAVASCRIPT-WEBPACK-APIs-REST',
      projectLink: 'https://aldonava09.github.io/Project-Social-Network/',
      codeLink: 'https://github.com/aldonava09/Project-Social-Network',
      projectDescription: 'This project is a social network that has been developed using HTML, CSS, and JavaScript. REST APIs have been used to interact with the server, and the BEM methodology has been applied. project also utilizes the Webpack bundler to manage dependencies and optimize the code.'
    },
    {
      image: agencyPageImg,
      name: 'WEB DESIGNER AGENCY',
      technologies: 'HTML-CSS-JAVASCRIPT-BOOSTRAP',
      projectLink: 'https://aldonava09.github.io/Proyecto-Boostrap/',
      codeLink: 'https://github.com/aldonava09/Proyecto-Boostrap',
      projectDescription: 'This project is a web page for a web development agency specialized in creating sites for other businesses, using CSS, HTML JavaScript, by the use of Bootstrap framework.'
    },
    {
      image: landingPageBlogImg,
      name: 'BLOG LANDING PAGE',
      technologies: 'HTML-CSS',
      projectLink: 'https://aldonava09.github.io/Proyecto-Blog-Landing-Page/',
      codeLink: 'https://github.com/aldonava09/Proyecto-Blog-Landing-Page',
      projectDescription: 'The project is a one-page website, it is designed to expose the information in a visually attractive way, since it has a series of images, figures, third-party video resources and responsive links which they reinforce the impact of the information by being interactive with the user.'
    }
]

function Projects({ data }) {
    return (
        <section className="projects">
            <h2 className='projects__title'>Projects</h2>
            <a className='projects__link' href={'#footer'}>CONTACT ME</a>
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