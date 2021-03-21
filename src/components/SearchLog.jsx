import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import { Redirect, Route, withRouter } from 'react-router-dom';
import logo from '../images/right-pointing-magnifying-glass_1f50e.png';
import "./css/SearchLog.css"

function SearchLog(props) {
    const getSearchResult = props.getSearchResult;
    const [log, setLog] = useState("");

    function logChangeHandler(event) {
        const newLog = event.target.value;
        setLog(newLog);
    }

    function logOnSubmitHandler(event) {
        event.preventDefault();
        if(!log)
            return;
        getSearchResult(log);
        setLog("");
    }
    let redirectComponent = [];
    return (
        <div>
            <Form className="mr-sm-6" inline onSubmit={logOnSubmitHandler}>
                <img src={logo} alt="magnifying-glass" className="magGlass" />
                <FormControl type="text submit" placeholder="Find a Log"  className="mr-sm-2" value={log} onChange={logChangeHandler}/>
                <Button onClick={logOnSubmitHandler} type="submit">Search</Button>
            </Form>
        </div>
    );

}

export default SearchLog;