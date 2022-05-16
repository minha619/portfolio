import React from 'react';
import { useHistory } from "react-router-dom";


function Home() {
    let history = useHistory();
    const onclick = () => {
        // window.location.replace('/Projects')
        history.push('/Projects')
    }
    return (
        <div class='main-container'>
            <div id='home-container'>
                Hello, <br></br>
                I'm Minha Kim. <br></br>
                I'm a front-end web developer.
                <button onClick={onclick} class="uk-button uk-button-default" uk-tooltip="title: VIEW PORTFOLIO; pos: bottom" >Check out more</button>
            </div>
        </div>
    );
}

export default Home;

