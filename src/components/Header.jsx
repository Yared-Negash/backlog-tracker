import React,{useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'


function Header() {

  const [log,setLog] = useState("");

  function logChangeHandler(event){
    const newLog = event.target.value;
    setLog(newLog);
  }

  function logOnClickHandler(event){
    alert(log);

    setLog("");
    event.preventDefault();
  }

  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid >
        <Navbar.Brand className="mr-sm-6" href="#home">🪓backLOG</Navbar.Brand>
        <Form className="mr-sm-6" inline onSubmit={logOnClickHandler}action="http://localhost:3000/findLog" method="GET">
          <img src="/public/right-pointing-magnifying-glass_1f50e.png" alt="magnifying-glass"></img>
          <FormControl type="text submit" placeholder="Find a Log" name="searchedLog" className="mr-sm-2" value={log} onChange={logChangeHandler}/>
        </Form>
      </Container>
    </Navbar>);
}

export default Header;

/*
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">backLOG</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown01">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex ml-auto" action="http://localhost:3000/findLog" method="GET">
          <input class="form-control me-2" type="search" placeholder="Find a Log" name="searchedLog" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  */