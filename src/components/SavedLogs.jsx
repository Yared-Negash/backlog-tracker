import React, { useState, useEffect } from "react";
import IntroJumbo from '../components/IntroJumbo'
import { Container, Row, Col } from "react-bootstrap";

import SavedLogCard from "./SavedLogCard"

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}` : `${location}`;

function SavedLogs(props) {
  const [hasBackLog, setbackLog] = useState(false);
  const [backLogList, setbackLogList] = useState([]);

  useEffect(() => {
    const options = {
      credentials: 'include',
    }
    fetch(`${url}/`, options)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          if (!result.length)
            return;

            debugger;
          setbackLog(true);
          setbackLogList([...result]);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("test");
        }
      )
  },[])


  if (!hasBackLog) {
    return (
      <div>
        <IntroJumbo />
      </div>
    );
  }
  else {
    return (
      <div>
        <Container >
          <Row>
            {backLogList.map((element, i) => {
              return (
                <Col sm={12} md={6} lg={4} key={i}>
                  <SavedLogCard
                    logTitle={element.logTitle}
                    logPlot={element.logPlot}
                    logReleaseDate={element.logReleaseDate}
                    logPoster={element.logPoster}
                    logId={element.logId}
                  />
                </Col>
              )
            })}

          </Row>
        </Container>
      </div>
    );
  }
}

export default SavedLogs;

