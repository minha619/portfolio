import React from 'react';

function Home() {
    return (
        <div class='main-container'>
            <div id='home-container'>
                Hello, <br></br>
                I'm Minha Kim. <br></br>
                I'm a front-end web developer.
                <button class="uk-button uk-button-default" uk-tooltip="title: VIEW PORTFOLIO; pos: bottom" >Check out more</button>
            </div>
        </div>
    );
}

export default Home;