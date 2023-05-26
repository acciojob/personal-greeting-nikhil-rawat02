
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name , setName] = useState("");
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
        <input type="text" name="name" onChange={e=>setName(e.target.value)}/>
        <p>{name ? `Hello ${name}!` : ""}</p>
    </div>
  )
}

export default App
