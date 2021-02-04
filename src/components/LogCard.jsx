import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function LogCard(props) {
    const logTitle = props.logTitle;
    const logReleaseDate = props.logReleaseDate;
    const logPlot = props.logPlot;
    const logPoster = props.logPoster;

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={logPoster} />
                <Card.Body>
                    <Card.Title>{logTitle ? logTitle : "Title Not Found"}</Card.Title>
                    <Card.Text>{logReleaseDate ? logReleaseDate : ""}</Card.Text>
                    <Card.Text>{logPlot ? logPlot : "Synopsis Not Found"}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )

}
export default LogCard;