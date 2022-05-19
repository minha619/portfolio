import React from 'react';
import {Link} from 'react-router-dom';



function Home() {

    return (
        <div class='main-container'>
            <div id='home-container'>
                Hello, <br></br>
                I'm Minha Kim. <br></br>
                I'm a front-end web developer.
                <button class="uk-button uk-button-default" uk-tooltip="title: VIEW PORTFOLIO; pos: bottom" > <Link to="/Projects">Check out more </Link> </button>
            </div>
        </div>
    );
}

export default Home;

