import React from "react";
import { Link } from 'react-router-dom';


function login(props){






    return(
        <div>
            <h1>Sign in to enter</h1>
            <button onClick={props.login}>Login</button>
             <button onClick={props.logout}>Logout.</button>
             {props.enter && <Link to='/app'>Enter</Link>}
        </div>
    )
}

export default login;