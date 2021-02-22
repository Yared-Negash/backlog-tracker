import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import SearchLog from "./SearchLog";

function Header(props) {
  
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid >
        <Navbar.Brand className="mr-sm-6" href="/">🪓backLOG</Navbar.Brand>
        <SearchLog 
          setLogList={props.searchNewLog}
        />
        <Nav.Link href="/Login">Login</Nav.Link>
      </Container>
    </Navbar>);
}

export default Header;

