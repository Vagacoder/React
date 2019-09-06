import React from 'react';
import { useState , useEffect } from 'react';
import firebase from  'firebase';

const config = {
    apiKey: process.env.KEY,
    authDomain: process.env.DOMAIN,
    databaseURL: process.env.URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.BUCKET,
    messagingSenderId: process.env.SENDER_ID,
  };

  firebase.initializeApp(config);

const App = () => {

  const personHolder = {
    age: 0,
    eventDate:"",
    name:"",
  };

  const [person1, setPerson1] = useState(personHolder);
  const [person3, setPerson3] = useState(personHolder);
  const [update, setUpdate] = useState(true);

  var db = firebase.firestore();
  var person1Ref = db.collection("test01").doc("person1");
  var person3Ref = db.collection("test01").doc("person3");

  const handleClick1 = (e) =>{
    console.log("clicked #1 " + e.target.value);
    let newName = randomName(6);
    person1Ref.update({
      name: newName
    });
    setUpdate(!update);
  };

  const handleClick2 = (e) => {
    console.log("clicled #3 " + e.target.value);
    let newName = randomName(6);
    person3Ref.update({
      name: newName
    });
  }

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
      console.log("fetching person 1 ...");
      console.log(doc);
      let docData = doc.data()
      console.log(docData);
      let newPerson = {};
      newPerson.name = docData.name;
      newPerson.eventDate = (new Date(docData.eventDate.seconds * 1000)).toLocaleString();
      setPerson1(newPerson);
    });

    person3Ref.onSnapshot((doc)=>{
      console.log("fetching person 3...");
      console.log(doc);
      let docData = doc.data()
      console.log(docData);
      let newPerson = {};
      newPerson.name = docData.name;
      newPerson.age = docData.age;
      setPerson3(newPerson);
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
    onClick={handleClick1}
    >
    Click to change person1's name
    </button>
    <p>person3's name: </p>
      {person3.name}
    <p>person1's age</p>
      {person3.age}
    <br/>
    <br/>
    <br/>
    <button
    onClick={handleClick2}
    >
    Click to change person3's name
    </button>
    </div>
  );
}

export default App;
