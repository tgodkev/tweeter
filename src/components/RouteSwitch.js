import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {  useState } from 'react';

import db from '../firebase-config'
import {  collection, addDoc,} from 'firebase/firestore';
import { auth } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup, setPersistence, browserSessionPersistence, onAuthStateChanged,} from 'firebase/auth';


import App from './App';
import Login from './Login';


function RouteSwitch(){

    const[message , setMessage] = useState([]);
    const[signIn, setSignIn] = useState(false);
    
  
    

  function handleChange(e){
    let text = e.target.value 

    setMessage(text)
  }
  
 
  // Inside AuthProvider
const provider = new GoogleAuthProvider();

   const  login = () => {
    auth.onAuthStateChanged((user) => {
      signInWithPopup(auth, provider).then(() => {
        setSignIn(!signIn);
        
      })
    });

};




//console.log(auth.currentUser.displayName)


const logout = () => {
    auth.signOut();
    console.log("logout");
};
 
  
async function saveMessage() {
  const collectionRef = collection(db, "messages");
  const payload = {message : message, userName: auth.currentUser.displayName}
  await addDoc(collectionRef, payload);
}


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





{/* signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const user = result.user;
            //console.log({ credentials, token,  user });
            setPersistence()
            
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
        });*/}