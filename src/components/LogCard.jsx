import React from 'react';

function LogCard(props) {
    const logTitle = props.logTitle;
    const logReleaseDate = props.logReleaseDate;
    const logPlot = props.logPlot;
    const logPoster = props.logPoster;

    return (
        <div>
            <h1>You searched for {logTitle ? logTitle : "Title Not Found"}, which released on {logReleaseDate ? logReleaseDate : "Release Date Not Found"}</h1>
            <p>Synopsis: {logPlot ? logPlot : "Synopsis Not Found"}</p>
            <img src={logPoster} alt="Poster not found"></img>
        </div>
    )

}

export default LogCard;