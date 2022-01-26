import React, { useState } from 'react';



function App(props) {






  return (
    <div>

      <div className='message'>
      <h1>username.</h1>
        <h1>{props.text}</h1>
      </div>

    <div>
     
        <label htmlFor="input">enter message here.</label>
        <input type="text" onChange={props.input} />
        <button type='submit' onClick={props.send} >Send.</button>

     
      </div>
        {props.text.map((text) =>(
        <h1> {message.message}</h1>
      ))}
    </div>
  );
}

export default App;
