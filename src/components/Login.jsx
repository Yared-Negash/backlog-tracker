import { useState, React } from 'react'
import loginBackground from '../images/login_BOTW.png';
import BackLog_Logo from '../images/backlog_logo.png'
import Button from 'react-bootstrap/Button';

import "./css/Login.css";
const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/login` : `${location}/login`;


function Login() {
    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");

    function loginHandler(event) {
        if (!emailState || !passwordState)
            alert(`Please fill in both entries`);
        else {
            const options = {
                method: "POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    emailAddress: emailState,
                    userPassword: passwordState
                })
            };
            fetch(url, options)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (!result.loginStatus) {
                            alert("Incorrect username or password. Please try again.");
                            return;
                        }
                        window.location.replace("/");
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        console.log("test");
                    }
                )

        }
        event.preventDefault();
    }

    function emailChangeHandler(event) {
        setEmailState(event.target.value);
    }
    function passwordChangeHandler(event) {
        setPasswordState(event.target.value);
    }
    return (
        <div id="loginBackground">
            <div id="loginBox">
                <img id="login_icon" src={BackLog_Logo}></img>
                <form onSubmit={loginHandler} class="loginForm">
                    <p>Email</p>
                    <input type="text" id="email" name="email" value={emailState} onChange={emailChangeHandler} placeholder="Email Address" required />
                    <p>Password</p>
                    <input type="password" id="pwd" name="pwd" value={passwordState} onChange={passwordChangeHandler} placeholder="Password" required />
                    <Button type="submit" onClick={loginHandler}>Login</Button>
                    <div class="resetCred">
                        <a href="#forgot"><p>Forgot Password?</p></a>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default Login;
