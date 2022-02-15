import React, {useState, useEffect} from 'react'
import { auth } from '../firebase-config';
import { collection,  onSnapshot,  orderBy,  limit, query, getFirestore} from 'firebase/firestore'
import NewCard from './Card'
export default function Profile() {

  const name = auth.currentUser.displayName;
  const pic = auth.currentUser.photoURL;
  const uid = auth.currentUser.uid;

  


    const [profileMessages, setProfileMessages] = useState('')


  useEffect(() => {
    const recentMessageQuery = query(collection(getFirestore(),'messages'), orderBy({uid}), limit(12));
  
    onSnapshot(recentMessageQuery, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data())
      //setUserMessage(data);
      setProfileMessages(data);
      console.log(profileMessages);
      
    })

  
    
  }, [])

  function createMesage(profileMessages){
    return(
      <NewCard 
      name={name}
      message= {profileMessages}
      />
    )
  }



  return (
    <div>
        <h1>{name}</h1>
        <img src={pic} alt="" />
        {profileMessages.map(createMesage)}
    </div>
  )
}
