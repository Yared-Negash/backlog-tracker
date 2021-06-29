import { React, useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SearchLog from "./SearchLog";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import BackLog_Logo from '../images/backlog_logo.png'

import "./css/Header.css"

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/isAuth` : `${location}/isAuth`;


function HeaderMobile(props) {
    let history = useHistory();

    const [isAuth, setAuth] = useState(false);
    function getSearchResult(searchLog) {
        history.replace(`/search/${searchLog}`);
    }
    //useEffect executes after a component gets rendered. Second parameter (the empty array) makes sure it only runs once. Otherwise
    //It would be an infinite call: https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a
    useEffect(() => {

        const options = {
            credentials: 'include',
        }
        fetch(url, options)
            .then(res => res.json())
            .then(
                (result) => {
                    if (!result.isAuth)
                        return;

                    setAuth(result.isAuth);

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("test");
                }
            )
    }, [])
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container fluid >
                <Col xs={12}>
                    <Navbar.Brand href="/">
                        <img
                            src={BackLog_Logo}
                            height="50px"
                            alt="🪓backLOG"
                        />
                    </Navbar.Brand>
                </Col>
                <Col xs={9}>
                    <SearchLog className="mobileSearch" getSearchResult={getSearchResult} />
                </Col>
                <Col xs={3}>
                    <DropdownButton
                        as={ButtonGroup}
                        id={`dropdown-button-drop-Account}`}
                        size="sm"
                        variant="info"
                        title="👥"
                    >
                        {isAuth ? null : <Dropdown.Item href="/Register">Register</Dropdown.Item>}
                        {isAuth ? <Dropdown.Item href="/Logout">Logout</Dropdown.Item> : <Dropdown.Item href="/Login">Login</Dropdown.Item>}
                    </DropdownButton>
                </Col>

            </Container>
        </Navbar>);
}

export default HeaderMobile;

