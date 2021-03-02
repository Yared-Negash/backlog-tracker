import { useState, React } from 'react'
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
            alert(`email ${emailState} and pass ${passwordState}`);
            const options = {
                method: "POST",
                header: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    emailAddress: emailState,
                    userPassword: setPasswordState
                })
            }
            fetch(url, options)
                .then(res => res.json())
                .then(
                    (result) => {
                        alert(JSON.stringify(result));
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
        <div>
            <h1>Login Page</h1>
            <form onSubmit={loginHandler}>
                <label for="email">Email Address:</label>
                <input type="text" id="email" name="email" onChange={emailChangeHandler} required />
                <label for="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd" onChange={passwordChangeHandler} required />
                <button type="submit" onClick={loginHandler}>Login</button>
            </form>
        </div>
    );
}


export default Login;
