import {BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {  useState } from 'react';

import db from '../firebase-config'
import {  collection, addDoc,} from 'firebase/firestore';
import { auth } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged,} from 'firebase/auth';


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
    signInWithPopup(auth, provider)

};

onAuthStateChanged(auth, (user) => {
  if (user.emailVerified === true) {
    // User is signed in, see docs for a list of available properties
    setSignIn(true);

  
    //const uid = user.uid;

    //console.log(user);
    // ...
  } else {
    // User is signed out
    signInWithPopup(auth, provider)
  }
});



//console.log(auth.currentUser.displayName)


const logout = () => {
    auth.signOut();
    console.log("logout");
    setSignIn(false);
};
 
  
async function saveMessage() {
  const collectionRef = collection(db, "messages");
  const payload = {message : message, userName: auth.currentUser.displayName}
  await addDoc(collectionRef, payload);
}


    return(
      
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login login={login} logout={logout} enter={signIn}  />} />
                <Route path='/app' element={<App input={handleChange} text={message} send={saveMessage}  />} />
                
            </Routes>
        </BrowserRouter>
    
      
    )
}




export default RouteSwitch





