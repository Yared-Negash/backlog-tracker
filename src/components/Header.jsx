import { React, useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import SearchLog from "./SearchLog";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import BackLog_Logo from '../images/backlog_logo.png'

import "./css/Header.css"

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/isAuth` : `${location}/isAuth`;


function Header(props) {
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
        <Navbar.Brand className="mr-sm-6" href="/">
          <img
            src={BackLog_Logo}
            height="60"
            alt="🪓backLOG"
          />
        </Navbar.Brand>
        <SearchLog getSearchResult={getSearchResult} />
        <div id="authButtonSection">
          {isAuth ? null : <Nav.Link href="/Register"><Button className="authButton">Register</Button></Nav.Link>}
          {isAuth ? <Nav.Link href="/Logout"><Button className="authButton">Logout</Button></Nav.Link> : <Nav.Link href="/Login"><Button className="authButton">Login</Button></Nav.Link>}
        </div>
      </Container>
    </Navbar>);
}

export default Header;

