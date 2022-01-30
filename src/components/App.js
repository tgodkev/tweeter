import React, { useState, useEffect} from 'react';
import db from '../firebase-config'
import { auth } from '../firebase-config';
import { collection,  onSnapshot} from 'firebase/firestore';
import NewCard from './Card'



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


    

 

//console.log(userMessage[0].message);

  function createMesage(userMessage){
    return(
      <NewCard 
      id={userMessage.id}
      message={userMessage.message}
      name={userMessage.userName}
      />
    )
  }

  const name = auth.currentUser.displayName;
  const pic = auth.currentUser.photoURL;
  console.log(pic);

  return (
    <div>

      
        <div className='username'>
        <h1>{name}</h1>
        <img src={pic} />
        </div>
    

    
        <div className='input'>
        <input className= "textField" type="text" placeholder='enter message' onChange={props.input} />
        <button type='submit' onClick={props.send} >Send.</button>
        

     
      </div>

      <div>

       {userMessage.map(createMesage)}
      
      </div>

    </div>
  );
}

export default App;



 
