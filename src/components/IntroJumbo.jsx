import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import backgroundVideo from '../images/backLog_jumbotron_mashup.mp4'

import "./css/introJumbo.css"

function IntroJumbo() {
    return (
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={backgroundVideo} type="video/mp4" /> 
            </video>
            <div class="jumbotronBackground">
                <h1>Is it getting cold? Go check the backLOG</h1>
                <p>Use this site to track and complete movies, shows, and games in your <b>backLOG</b></p>
                <p><i>🔥🪓🌲Don't play with fire kids🔥🪓🌲</i></p>
            </div>
        </div>
    )
}

export default IntroJumbo;