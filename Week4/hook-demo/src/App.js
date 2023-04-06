import './App.css';
import {useState} from "react";

function App() {

  //Creating a constant function
  const greeting = () => {
    alert("Why hello there");
  }

  //notice how everytime you reload the page the color goes back to magenta
  const [color, setColor] = useState("magenta");

  return (
      <>
        <button onClick={greeting}>Greeting from an old friend</button>
        <h1>My Favorite color is {color}!</h1>
          {/*i liked these colors more than the ones in the tutorial*/}
        <button type="button" onClick={() => setColor("blue")}>Blue</button>
        <button type="button" onClick={() => setColor("red")}>Red</button>
        <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
        <button type="button" onClick={() => setColor("green")}>Green</button>
      </>

  );
}

export default App;
