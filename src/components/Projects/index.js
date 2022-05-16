import React from 'react';
import ProjectList from '../ProjectList';

function Projects(props) {
    const { currentCategory } = props;
    return (
        <div class='main-container'>
            <div id='projects-container'>
                <p>{currentCategory.description}</p>
                <ProjectList category={currentCategory.name} />
                {/* <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
                    <div>
                        <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
                            <h3 class="uk-card-title">Space RPG</h3>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
                            <h3 class="uk-card-title"></h3>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Projects;
