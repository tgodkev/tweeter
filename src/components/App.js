import React, { useState } from 'react';



function App(props) {






  return (
    <div>

      <div className='message'>
      <h1>username.</h1>
        <h1>{props.text}</h1>
      </div>

    <div>
      <form action="submit">
        <label htmlFor="input">enter message here.</label>
        <input type="text" onChange={props.input} />
        <button>Send.</button>

      </form>
      </div>
    </div>
  );
}

export default App;
