import {useState, useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import DessertContainer from './Components/DessertContainer';
import DessertForm from './Components/DessertForm';
import NavBar from './Components/NavBar';
import DessertDetail from "./Components/DessertDetail";
import {Route, Switch} from 'react-router-dom'

function App() {
  const [desserts, setDesserts] = useState([])
  const [selectedDessert, setSelectedDessert] = useState(null)
  const [fullDesserts, setFullDesserts] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/desserts")
  .then(res => res.json())
  .then(data => {
    setDesserts(data)
    setFullDesserts(data)
  })
    
}, [])

const addNewDessert = (newDessertObj) => {
  setDesserts((prevArray) => [...prevArray, newDessertObj])
}

const deleteRecipe = (clickedRecipe) => {

  const newArray = desserts.filter((oldDessertObj) => oldDessertObj.id !== clickedRecipe.id)
  setDesserts(newArray)
}

function handleFilterDessert(id) {
  const filteredDesserts = fullDesserts.filter((dessert)=> dessert.tags.includes(id))

  setDesserts(filteredDesserts)
}

function handleFavorite(e, dessert){
  e.stopPropagation();
  fetch(`http://localhost:3000/desserts/${dessert.id}`, {
     method: "PATCH",
     headers: {"Content-Type" : "application/json"},
     body: JSON.stringify({favorited: !dessert.favorited}) 
    }
  )
  .then(res => res.json())
  .then(favoritedDessert => {
    const favoritedDessertList = desserts.map(ogDessert => {
      if(ogDessert.id === dessert.id) {
        return favoritedDessert; 
      } else {
        return ogDessert
      }
    }) 
    setSelectedDessert(favoritedDessert)
    setDesserts(favoritedDessertList)
  })  
}



 
  return (
    <div className="App">
     <Header />
     <NavBar handleFilterDessert={handleFilterDessert} />
     <Switch>
      <Route path= "/desserts/new">
        <DessertForm addNewDessert={addNewDessert}/>
      </Route>
      <Route path = "/desserts">
        {selectedDessert ? <DessertDetail dessert={selectedDessert} handleFavorite={handleFavorite}/> : null}
      </Route>
      <Route path = "/">
        <DessertContainer setSelectedDessert= {setSelectedDessert} deleteRecipe={deleteRecipe} desserts={desserts}/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;


