import './App.css';

function App() {

  //Creating a constant function
  const greeting = () => {
    alert("Why hello there");
  }

  return (
      //Call the function from the onClick handler
    <button onClick={greeting}>Greeting from an old friend</button>
  );
}

export default App;
