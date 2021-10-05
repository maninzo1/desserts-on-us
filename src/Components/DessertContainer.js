import DessertCard from "./DessertCard"

function DessertContainer({desserts}) { 

    return(    
    desserts.map((dessert)=> <DessertCard key= {dessert.id} dessert={dessert}/>)    
    )
}

export default DessertContainer;