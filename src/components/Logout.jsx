import { useState, React, useEffect } from 'react'
import { Redirect } from 'react-router';
const location = process.env.REACT_APP_LOCATION || 'http://localhost'
const port = process.env.LOCATION || 3000
const url = location.includes("localhost") ? `${location}:${port}/logout` : `${location}/logout`;

function Logout() {

    useEffect(()=>{
        
        const options = {
            credentials: 'include',
        }
        fetch(url,options)
        .then(res => res.json())
        .then(
            (result) => {
                window.location.replace("/");
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log("test");
            }
        )
    }, []);
    return (null);
}


export default Logout;
