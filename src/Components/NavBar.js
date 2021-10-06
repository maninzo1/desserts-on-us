import {Link} from 'react-router-dom'
function NavBar({handleFilterDessert}) {
    return (
      <div>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"fruit"}>Fruit</p>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"pastry"}>Pastry</p>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"chocolate"}>Chocolate</p>
        <p onClick= {(e) => handleFilterDessert(e.target.id)}id={"dairy"}>Dairy</p>
        <Link to= "/desserts/new">Add a Recipe</Link>
      </div>
    );
}

export default NavBar;
