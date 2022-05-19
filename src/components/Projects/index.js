import React from 'react';
import ProjectList from '../ProjectList';

function Projects(props) {
    const { currentCategory } = props;
    return (
        <div class='main-container'>
            <div id='projects-container'>
                <h3 data-testid="h1tag">PROJECTS</h3>
                {/* <p>{currentCategory.description}</p> */}
                <ProjectList category={currentCategory.name} />
            </div>
        </div>
    );
}

export default Projects;
