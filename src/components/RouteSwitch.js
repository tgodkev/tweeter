import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import db from '../firebase-config'
import { doc, collection, addDoc, onSnapshot} from 'firebase/firestore';


import App from './App';


function RouteSwitch(){

    const[message , setMessage] = useState([]);

    

    useEffect(() => {
      onSnapshot(collection(db, "messages"), (snapshot) => {
          console.log(snapshot.docs.map((doc) => doc.data()))
      })
  })




  function handleChange(e){
    let text = e.target.value 

    setMessage(text)
  }

  async function saveMessage() {
    const collectionRef = collection(db, "messages");
    const payload = {message : message}
    await addDoc(collectionRef, payload);
  }
 
  


    return(
      
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App input={handleChange} text={message} send={saveMessage}  />} />
            </Routes>
        </BrowserRouter>
    
      
    )
}




export default RouteSwitch