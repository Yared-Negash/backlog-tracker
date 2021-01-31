import React from 'react';

function LogCard(props) {
    const logTitle = props.logTitle;
    const logReleased = props.logReleased;
    const logPlot = props.logPlot;
    const logPoster = props.logPoster;
    return (
        <div>
            <h1>You searched for {logTitle}, which released on {logReleased}</h1>
            <p>Synopsis: {logPlot}</p>
            <img src={logPoster} alt="Poster not found"></img>
        </div>
    )

}

export default LogCard;