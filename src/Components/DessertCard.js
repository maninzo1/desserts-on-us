import styled from "styled-components";

function DessertCard({dessert}) {
 const {name, image, favorited} = dessert   
    return (
    <CardWrapper>
        <h3>{name}</h3>
        <img src= {image} width= "200px" />
        <div>
            <button>{favorited ?"❤️" : "♡" }</button> 
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
