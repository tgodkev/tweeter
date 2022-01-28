import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import db from '../firebase-config'
import { doc, collection, addDoc, onSnapshot, getDocs} from 'firebase/firestore';
import { auth } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


import App from './App';
import Login from './Login';


function RouteSwitch(){

    const[message , setMessage] = useState([]);
    const[signIn, setSignIn] = useState(false);
    

    //console.log(message);

  

 

  

  function handleChange(e){
    let text = e.target.value 

    setMessage(text)
  }

  async function saveMessage() {
    const collectionRef = collection(db, "messages");
    const payload = {message : message}
    await addDoc(collectionRef, payload);
  }

  // Inside AuthProvider
const provider = new GoogleAuthProvider();

   const  login = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            //console.log({ credential, token, user });
        })
        .then(() => {
          setSignIn(!signIn);
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            //console.log({ errorCode, errorMessage, email, credential });
        });
       

};




const logout = () => {
    auth.signOut();
    console.log("logout");
};
 
  


    return(
      
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login login={login} logout={logout} enter={signIn} />} />
                <Route path='/app' element={<App input={handleChange} text={message} send={saveMessage}  />} />
                
            </Routes>
        </BrowserRouter>
    
      
    )
}




export default RouteSwitch