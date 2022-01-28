import React, { useState, useEffect} from 'react';
import db from '../firebase-config'
import { doc, collection, addDoc, onSnapshot, getDocs} from 'firebase/firestore';



function App(props) {

  const[userMessage, setUserMessage] = useState([{
    message: '',
  }])

  useEffect(() => {
    onSnapshot(collection(db, "messages"), (snapshot) => {
        //console.log(snapshot.docs.map((doc) => doc.data()))
        setUserMessage(snapshot.docs.map((doc) => doc.data()))
        
    })
}, [])

  
const first = userMessage.message;
  
 


  return (
    <div>

      

    <div>
     
        <label htmlFor="input">enter message here.</label>
        <input type="text" onChange={props.input} />
        <button type='submit' onClick={props.send} >Send.</button>


     
      </div>

      <div className='message'>
      <h1>username.</h1>
  
      </div>

    </div>
  );
}

export default App;
