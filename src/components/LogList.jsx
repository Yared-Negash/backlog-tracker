import React, { useState, useEffect } from "react";
import IntroJumbo from "./IntroJumbo"

import LogCard from "./LogCard"
import { Container, Row, Col } from "react-bootstrap";

const test = { "logTitle": "The Man in the High Castle", "logPlot": "In a dystopian America dominated by Nazi Germany and Imperial Japan, a young woman discovers a mysterious film that may hold the key to toppling the totalitarian regimes.", "Release": "15 Jan 2015", "logPoster": "https://m.media-amazon.com/images/M/MV5BZWEwNzQ4NzUtMWRmYS00NDdiLTg5NDItODA5M2M4YTM0ZTE2XkEyXkFqcGdeQXVyMTAzNjU2NjM1._V1_SX300.jpg" };

function LogList(props) {
    const logArray = props.logCardList;
    if (!logArray || logArray.length == 0) {
        return (
            <div>
                <IntroJumbo />
            </div>
        );
    }

    return (
        <Container >
            <Row>
                {logArray.map((element) => {
                    return (
                        <Col sm={12} md={6} lg={4}>
                            <LogCard
                                logTitle={element.logTitle}
                                logPlot={element.logPlot}
                                logReleaseDate={element.logReleaseDate}
                                logPoster={element.logPoster}
                            />
                        </Col>
                        )
                })}

            </Row>
        </Container>
    );
}

export default LogList;