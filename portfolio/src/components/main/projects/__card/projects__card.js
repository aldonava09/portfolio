import React, { useState } from 'react';
import '../../../../styles/main/projects/__card/projects__card.css';



function Card({ image, projectName, technologies, projectLink, codeLink, projectDescription}) {

    const [projectText, setProjectText] = useState(false);

    function showProjectText(){
        setProjectText(true);
    }

    function hideProjectText(){
        setProjectText(false);
    }

    return (
      <div className="projects__card">
        <div className='projects__card-image-container' onMouseOver={showProjectText} onMouseOut={hideProjectText}>
            <div className={`projects__card-image-overlay ${projectText ? 'projects__card-image-overlay_visible' : 'projects__card-image-overlay_hidden'}`}></div>
            <div className={`projects__card-text ${projectText ? 'projects__card-text_visible' : 'projects__card-text_hidden'}`}>
                <p className='projects__card-project-description'>{projectDescription}</p>
                <a className='projects__card-project-link' href={projectLink} target='blank'>VIEW PROJECT</a>
                <a className='projects__card-code-link' href={codeLink} target='blank'>VIEW CODE</a>
            </div>
            <img className={'projects__card-image'} src={image} alt={projectName + " Image"} />
        </div>
        <div className="projects__card-info">
            <h3 className="projects__card-header">{projectName}</h3>
            <p className="projects__card-paragraph">{technologies}</p>
        </div>
      </div>
    );
}

export default Card;