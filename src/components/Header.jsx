import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import SearchLog from "./SearchLog";

function Header(props) {
  
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid >
        <Navbar.Brand className="mr-sm-6" href="#home">🪓backLOG</Navbar.Brand>
        <SearchLog 
          setLogList={props.searchNewLog}
        />
      </Container>
    </Navbar>);
}

export default Header;

