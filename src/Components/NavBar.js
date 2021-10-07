import {Link} from 'react-router-dom'
import styled from "styled-components";

function NavBar({handleFilterDessert}) {
    return (
      <NavContainer>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"fruit"}>Fruit</p>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"pastry"}>Pastry</p>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"chocolate"}>Chocolate</p>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"dairy"}>Dairy</p>
        <Link to= "/desserts/new">Add a Recipe</Link>
      </NavContainer>
    );
}

export default NavBar;

const NavContainer = styled.div `
    display: flex;
    justify-content:center;
    font-size: 20px;
    & p{
      padding: 0.5em 2em;
      margin:0 0.3em 0.3em 0;
  }
    & a{
        text-decoration:none;
        color: black;
        padding: 0.5em 2em;
        margin:0 0.3em 0.3em 0;
    }

`