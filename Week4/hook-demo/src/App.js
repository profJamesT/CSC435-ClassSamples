import './App.css';
import {useState} from "react";

function App() {

  //Creating a constant function
  const greeting = () => {
    alert("Why hello there");
  }

  const [color, setColor] = useState("red");

  return (
      <>
        <button onClick={greeting}>Greeting from an old friend</button>
        <h1>My Favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}>Blue</button>
        <button type="button" onClick={() => setColor("red")}>Red</button>
        <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
        <button type="button" onClick={() => setColor("green")}>Green</button>
      </>

  );
}

export default App;
