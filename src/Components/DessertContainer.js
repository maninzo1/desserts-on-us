import DessertCard from "./DessertCard"

function DessertContainer({desserts, deleteRecipe}) { 

    return(    
    desserts.map((dessert)=> <DessertCard key= {dessert.id} dessert={dessert} deleteRecipe={deleteRecipe}/>)    
    )
}

export default DessertContainer;