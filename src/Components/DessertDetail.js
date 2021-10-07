import styled from "styled-components"


function DessertDetail({dessert, handleFavorite}){

    return(
        <CardWrapper>
            <h2>{dessert.name}</h2>
            <img src={dessert.image} style={{width:"300px"}}/>
            <br></br>
            <button onClick={(e) => handleFavorite(e, dessert)}> {dessert.favorited ?"❤️" : "♡" }</button>
            <p>{dessert.ingredients}</p>
            <p>{dessert.recipe}</p>
        
        </CardWrapper>
    )
}
export default DessertDetail;

const CardWrapper = styled.div `
    font-family:"Roboto", sans-serif;
    width: 700px;
    margin: 10px auto;
    padding: 25px;
    justify-content: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    & a{
        text-decoration:none;
        color: black;
    }
    & h2{
        font-size: 35px;
    }

`