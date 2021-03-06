import React, { useState, useEffect} from 'react';
import db from '../firebase-config'
import { auth } from '../firebase-config';
import { Link } from 'react-router-dom';
import { collection,  onSnapshot, serverTimestamp, orderBy, Timestamp, limit, query, getFirestore} from 'firebase/firestore';
import NewCard from './Card'



function App(props) {

  const[userMessage, setUserMessage] = useState([{
    message: '',
    userName: '',
    photo: '',
  }])

 
 

    useEffect(() => {
      const recentMessageQuery = query(collection(getFirestore(),'messages'), orderBy('timestamp', 'desc'), limit(12));
    
      onSnapshot(recentMessageQuery, (snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data())
        setUserMessage(data);
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
 

  
  return (
    <div>

      
        <div className='username'>
        <h1>{name}</h1>
        <img src={pic} />
        <Link to='/profile' >Profile </Link>
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



 
//useEffect(() => {
  //onSnapshot(collection(db, "messages"), (snapshot) => {
      //console.log(snapshot.docs.map((doc) => doc.data()))
      //setUserMessage(snapshot.docs.map((doc) => doc.data()))
      
  //})
    //}, [])