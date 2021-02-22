import React from 'react'


function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label for="email">Email Address:</label>
                <input type="text" id="email" name="email"/>
                <label for="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd" />
            </form>
        </div>
    );
}


export default Login;