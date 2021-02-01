import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


function SearchLog(props) {
    const [log, setLog] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const location = process.env.LOCATION || 'http://localhost'
    const port = process.env.LOCATION || 3000
    const url = `${location}:${port}/findLog`;

    
    function logChangeHandler(event) {
        const newLog = event.target.value;
        setLog(newLog);
    }

    function logOnSubmitHandler(event) {

        fetch(`${url}?searchedLog=${log}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    props.setLogList(result);
                    setLog("");
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )

        //  test();
        event.preventDefault();
    }
    return (
        <div>
            <Form className="mr-sm-6" inline onSubmit={logOnSubmitHandler}>
                <img src="/public/right-pointing-magnifying-glass_1f50e.png" alt="magnifying-glass"></img>
                <FormControl type="text submit" placeholder="Find a Log" name="searchedLog" className="mr-sm-2" value={log} onChange={logChangeHandler} />
                <Button type="submit">Search</Button>
            </Form>
        </div>
    );
}

export default SearchLog;