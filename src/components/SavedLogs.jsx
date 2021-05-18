import React, { useState, useEffect } from "react";
import IntroJumbo from '../components/IntroJumbo'

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost")? `${location}:${port}`: `${location}`;

function SavedLogs(props) {
  const [hasBackLog, setbackLog] = useState(false);

  useEffect(() => {
    const options = {
      credentials: 'include',
    }
    fetch(`${url}/`, options)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            if(!result.length)
              return;  
            setbackLog(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log("test");
        }
    )
  });
  if(!hasBackLog){
    return (
      <div>
        <IntroJumbo />
      </div>
    );
  }
  else{
         return (
      <div>
        <h1> YOU HAVE STUFF IN BACKLOG:)</h1>
      </div>
    );
  }
}

export default SavedLogs;

