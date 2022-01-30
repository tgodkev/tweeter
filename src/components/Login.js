import React from "react";
import { Link } from 'react-router-dom';
import Button from './Button';


function login(props){






    return(
        <div className="login">
            <h1>Sign in to enter</h1>
             <button onClick={props.login}>Login</button>
            <button onClick={props.logout}>Logout.</button>
             {props.enter && <Link to='/app'><Button >Enter</Button></Link>}
            
        </div>
    )
}

export default login;