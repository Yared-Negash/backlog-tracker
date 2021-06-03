import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import noPoster from '../images/noPoster.png'

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/removeLog` : `${location}/removeLog`;


function SavedLogCard(props) {
    const logTitle = props.logTitle;
    const logReleaseDate = props.logReleaseDate;
    const logPlot = props.logPlot;
    const logPoster = props.logPoster;
    const logId = props.logId;

    function removeBackLogHandler(event){
        const newLog = {
            logId: logId,
            logTitle: logTitle,
            logPoster: logPoster
        }
        const options = {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(newLog)
        };
        fetch(url, options)
            .then(res => res.json())
            .then(
                (result) => {
                    if (!result.removeLogStatus) {
                        alert("Issue removing from backLog. Please try again.");
                        return;
                    }
                    props.isDeleted();
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("test");
                }
            )
        event.preventDefault();
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logPoster === "N/A" ? noPoster : logPoster} />
                <Card.Body>
                    <Card.Title>{logTitle ? logTitle : "Title Not Found"}</Card.Title>
                    <Card.Text>{logReleaseDate ? logReleaseDate : ""}</Card.Text>
                    <Button variant="danger" onClick={removeBackLogHandler} >Remove from backLog</Button>
                </Card.Body>
            </Card>
        </div>
    )

}
export default SavedLogCard;