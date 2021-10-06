import styled from "styled-components";

function DessertCard({dessert, deleteRecipe, setSelectedDessert}) {
 const {name, image, favorited, id} = dessert   

 
 const deleteHandler = () => {
    fetch('http://localhost:3000/desserts/'+id, {method: "DELETE"})
      .then(() => deleteRecipe(dessert))
  }

    return (
    <CardWrapper onClick= {() => setSelectedDessert(dessert)}>
        <h3>{name}</h3>
        <img src= {image} width= "200px" />
        <div>
            <button>{favorited ?"❤️" : "♡" }</button> 
            <button onClick={deleteHandler} style={{backgroundColor: "Gray"}}>DELETE</button>
        </div>
    </CardWrapper>
    );
}

export default DessertCard;

const CardWrapper = styled.div `
    font-family:"Roboto", sans-serif;
    width: 250px;
    margin: 10px;
    padding: 25px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
    border-radius: 5px;

`
