import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import SearchLog from "./SearchLog";
import { useHistory } from "react-router-dom";


function Header(props) {
  let history = useHistory();
  function getSearchResult(searchLog) {
    history.replace(`/search/${searchLog}`);
  }
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid >
        <Navbar.Brand className="mr-sm-6" href="/">🪓backLOG</Navbar.Brand>
        <SearchLog getSearchResult={getSearchResult} />
        <Nav.Link href="/Register">Register</Nav.Link>
      </Container>
    </Navbar>);
}

export default Header;

