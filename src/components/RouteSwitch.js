import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import App from './App';


function RouteSwitch(){

    const[message , setMessage] = useState('');


  function handleChange(e){
    let text = e.target.value 

    setMessage(text)
  }

  console.log(message)


    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App input={handleChange} text={message}  />} />
            </Routes>
        </BrowserRouter>
    )
}


export default RouteSwitch