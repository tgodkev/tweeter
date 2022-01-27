import React, { useState } from 'react';



function App(props) {






  return (
    <div>

      

    <div>
     
        <label htmlFor="input">enter message here.</label>
        <input type="text" onChange={props.input} />
        <button type='submit' onClick={props.send} >Send.</button>

     
      </div>

      <div className='message'>
      <h1>username.</h1>
        <h1>{props.text}</h1>
      </div>

    </div>
  );
}

export default App;
