import DessertCard from "./DessertCard"

function DessertContainer({desserts, deleteRecipe, setSelectedDessert}) { 

    return(    
    desserts.map((dessert)=> <DessertCard key= {dessert.id} dessert={dessert} deleteRecipe={deleteRecipe} setSelectedDessert={setSelectedDessert}/>)    
    )
}

export default DessertContainer;