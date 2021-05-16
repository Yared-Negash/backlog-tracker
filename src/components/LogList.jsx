import React, { useState, useEffect } from "react";
import EmptySearch from "./EmptySearch"

import LogCard from "./LogCard"
import { Container, Row, Col } from "react-bootstrap";

const test = { "logTitle": "The Man in the High Castle", "logPlot": "In a dystopian America dominated by Nazi Germany and Imperial Japan, a young woman discovers a mysterious film that may hold the key to toppling the totalitarian regimes.", "Release": "15 Jan 2015", "logPoster": "https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_SX300.jpg" };

function LogList(props) {
    const [log, setLog] = useState(props.match.params.id);
    const location = process.env.REACT_APP_LOCATION || 'http://localhost'
    const port = process.env.LOCATION || 3000
    const url = location.includes("localhost")? `${location}:${port}/findLog`: `${location}/findLog`;
    const [logList, setLogList] = useState([]);

    //useEffect executes after a component gets rendered. Second parameter (the empty array) makes sure it only runs once. Otherwise
    //It would be an infinite call: https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a
    useEffect(()=>{
        
        setLog(props.match.params.id);
        const options = {
            credentials: 'include',
        }
        fetch(`${url}?searchedLog=${log}`,options)
        .then(res => res.json())
        .then(
            (result) => {
                setLogList([...result]);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log("test");
            }
        )
    }, [log,props.match.params.id])



    if (!logList || logList.length == 0) {
        return (
            <div>
                <EmptySearch />
            </div>
        );
    }

    return (
        <Container >
            <Row>
                {logList.map((element,i) => {
                    return (
                        <Col sm={12} md={6} lg={4} key={i}>
                            <LogCard
                                logTitle={element.logTitle}
                                logPlot={element.logPlot}
                                logReleaseDate={element.logReleaseDate}
                                logPoster={element.logPoster}
                                logID={element.logID}
                            />
                        </Col>
                        )
                })}

            </Row>
        </Container>
    );
}

export default LogList;