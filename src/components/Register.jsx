import { useState, React } from 'react'
import BackLog_Logo from '../images/backlog_logo.png'
import Button from 'react-bootstrap/Button';
import './css/Register.css'

const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/register` : `${location}/register`;

function Register() {
    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");

    function registerHandler(event) {
        if (!emailState || !passwordState)
            alert(`Please fill in both entries`);
        else {
            const options = {
                method: "POST",
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
                        if (!result.registerStatus) {
                            switch (result.MSG) {
                                case 'Email already exists':
                                    alert(`The email address you have entered is already registered. Please use a different email`);
                                    break;
                                default:
                                    alert(`Error registering. Please try again`);
                            }
                            return;
                        }
                        window.location.replace("/Login");
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
        <div id="registerBackground">
            <div id="loginBox">
                <img id="login_icon" src={BackLog_Logo}></img>
                <form onSubmit={registerHandler} class="loginForm">
                    <label htmlFor="email">Email Address:</label>
                    <input type="text" id="email" name="email" value={emailState} onChange={emailChangeHandler} required />
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" id="pwd" name="pwd" value={passwordState} onChange={passwordChangeHandler} required />
                    <Button type="submit" onClick={registerHandler}>Register</Button>
                </form>
            </div>
        </div>
    );
}


export default Register;
