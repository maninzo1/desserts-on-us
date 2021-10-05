import {useState, useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import DessertContainer from './Components/DessertContainer';
import DessertForm from './Components/DessertForm';
import NavBar from './Components/NavBar';

function App() {
  const [desserts, setDesserts] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/desserts")
  .then(res => res.json())
  .then(data => setDesserts(data))
}, [])

  return (
    <div className="App">
     <Header />
     <NavBar />
     <DessertContainer  desserts={desserts}/>
     <DessertForm />
    </div>
  );
}

export default App;
