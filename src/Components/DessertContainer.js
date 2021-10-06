import DessertCard from "./DessertCard"
import styled from "styled-components"

function DessertContainer({desserts, deleteRecipe, setSelectedDessert}) { 

    return(  
    <CardContainer>     
    {desserts.map((dessert)=> <DessertCard key= {dessert.id} dessert={dessert} deleteRecipe={deleteRecipe} setSelectedDessert={setSelectedDessert} />)}    
    </CardContainer>     
    )
    
}

export default DessertContainer;

const CardContainer = styled.div `
   display: flex;
   flex-direction: row;
   flex-wrap: wrap; 
   margin: 0px auto; 
`