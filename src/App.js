import {useState, useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import DessertContainer from './Components/DessertContainer';
import DessertForm from './Components/DessertForm';
import NavBar from './Components/NavBar';
import DessertDetail from "./Components/DessertDetail";

function App() {
  const [desserts, setDesserts] = useState([])
  const [selectedDessert, setSelectedDessert] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/desserts")
  .then(res => res.json())
  .then(data => setDesserts(data))
}, [])

const addNewDessert = (newDessertObj) => {
  setDesserts((prevArray) => [...prevArray, newDessertObj])
}

const deleteRecipe = (clickedRecipe) => {

  const newArray = desserts.filter((oldDessertObj) => oldDessertObj.id !== clickedRecipe.id)
  setDesserts(newArray)
}
 
  return (
    <div className="App">
     <Header />
     <NavBar />
     <DessertForm addNewDessert={addNewDessert}/>
     <DessertContainer  setSelectedDessert= {setSelectedDessert} deleteRecipe={deleteRecipe} desserts={desserts}/>
     <DessertDetail />
    </div>
  );
}

export default App;


// const filteredDesserts = desserts.filter((dessertObj => desserts.name.toLowerCase().includes))