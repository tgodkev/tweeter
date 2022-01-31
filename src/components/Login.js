import React from "react";
import { Link } from 'react-router-dom';
import UnstyledButtonCustom from './Button';
import Button from '@mui/material/Button';


function login(props){






    return(

        <div>
        <div className="login">
            <h1>Sign in to enter</h1>
             <Button variant='contained' onClick={props.login}>Login</Button>
            <Button variant='contained' onClick={props.logout}>Logout.</Button>
            
        </div>

        <div className="enter">
        {props.enter && <Link to='/app'><UnstyledButtonCustom /> </Link>}
        </div>
        </div>
    )
}

export default login;