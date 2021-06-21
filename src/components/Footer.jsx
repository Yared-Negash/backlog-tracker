import { React, useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SearchLog from "./SearchLog";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import BackLog_Logo from '../images/backlog_logo.png'

import "./css/Footer.css"

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/isAuth` : `${location}/isAuth`;


function Footer(props) {
  let history = useHistory();

  return (
    <div class="footer">
      <footer fluid>
        &copy; {new Date().getFullYear()} Yared Negash: <a href="https://yared-negash.github.io/"> Github </a>
      </footer>
    </div>
  );
}

export default Footer;

