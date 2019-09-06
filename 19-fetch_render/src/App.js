import React from 'react';
import { useState , useEffect } from 'react';
import firebase from  'firebase';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config);

const App = () => {

  const personHolder = {
    name:"",
    eventDate:""
  };

  const [person1, setPerson1] = useState(personHolder);
  const [update, setUpdate] = useState(true);

  var db = firebase.firestore();
  var person1Ref = db.collection("test01").doc("person1");

  const handleClick = (e) =>{
    console.log("clicked " + e.target.value);
    let newName = randomName(6);
    person1Ref.update({
      name: newName
    })
    setUpdate(!update);
  };

  const randomName = (length) => {
    let sourceString = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let result = "";
    for (let i = 0; i < length; i ++){
      result += sourceString[Math.floor(Math.random() * 10000 % 62)];
    }
    console.log(result);
    return result;
  };

  useEffect(() => {
    person1Ref.get().then((doc)=>{
      console.log("fetching...");
      console.log(doc);
      let docData = doc.data()
      console.log(docData);
      let newPerson = {};
      newPerson.name = docData.name;
      newPerson.eventDate = (new Date(docData.eventDate.seconds * 1000)).toLocaleString();
      setPerson1(newPerson);
    });
  }, [update]);

  return (
    <div className="App">
    <p>person1's name: </p>
      {person1.name}
    <p>person1's event date</p>
      {person1.eventDate}
    <br/>
    <br/>
    <br/>
    <button
    onClick={handleClick}
    >
    Click to change name
    </button>
    </div>
  );
}

export default App;
