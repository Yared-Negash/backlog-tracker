import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import noPoster from '../images/noPoster.png'

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/addLog` : `${location}/addLog`;


function LogCard(props) {
    const logTitle = props.logTitle;
    const logReleaseDate = props.logReleaseDate;
    const logPlot = props.logPlot;
    const logPoster = props.logPoster;
    const logId = props.logID;


    function addBackLogHandler(event){
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
                    if(!result.addLogStatus){
                        switch(result.MSG){
                            case 'User not logged in':
                                window.location.replace("/Register");
                                break;
                            case 'Duplicate logs not allowed':
                                alert(`${newLog.logTitle} already exists in your backLog`);
                                break;
                            default:
                                alert(`Error adding to your backLog. Please try again.`);
                        }
                        return;
                    }
                    alert("Added to BackLog");
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
            <Card style={{ width: '18rem', margin:'auto' }}>
                <Card.Img variant="top" src={logPoster === "N/A" ? noPoster : logPoster} />
                <Card.Body>
                    <Card.Title>{logTitle ? logTitle : "Title Not Found"}</Card.Title>
                    <Card.Text>{logReleaseDate ? logReleaseDate : ""}</Card.Text>
                    <Button variant="primary" onClick={addBackLogHandler} >Add to backLog</Button>
                </Card.Body>
            </Card>
        </div>
    )

}
export default LogCard;