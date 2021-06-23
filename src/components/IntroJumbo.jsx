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
                <div class="jumboText">
                    <h1>Backlog</h1>
                    <p>Search and track thousands of movies, shows, and games that you'll get to...eventually</p>
                    <p><i>Create an account to become a backLog lumberjack🔥🪓🌲</i></p>
                </div>
            </div>
        </div>
    )
}

export default IntroJumbo;