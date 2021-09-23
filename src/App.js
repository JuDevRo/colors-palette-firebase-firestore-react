import React, {useEffect, useState} from 'react'
import db from "./firebase"
import './App.css';
import { onSnapshot, collection, addDoc, setDoc } from '@firebase/firestore';

const Dot = ({color}) => {
  const style = {
    height: 25,
    width: 25,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"

  }
    return <span style={style}></span>
}

//(doc) => doc.data()
//getData(): Get data once
//onSnapshot(): Listen for realtime updates
//setDoc(docRef, payload)
function App() {
  const [colors, setColors] = useState([{name: "Loading...", id: "initial"}])

  useEffect(() => 
    onSnapshot(collection(db, "colors"), (snapshot) => setColors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))), []
  )
  const handleNew = async () => {
    const name = prompt("Enter color name")
    const value = prompt("Enter color value with this prototype #000")
    const collectionRef = collection(db, "colors")
    const payload = {name, value}
    const docRef = await addDoc(collectionRef, payload)
    console.log("The new id is: " + docRef.id)
  }

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>New</button>
      <ul>
        {colors.map(color => (
        <li key={color.id}>
          <a href="#">edit</a> <Dot color={color.value}/> {color.name} 
        </li>))}
      </ul>  
    </div>
  );
}

export default App;
