import {useState} from "react"

function DessertForm({addNewDessert}) {
    const[name, setName] =useState ("")
    const[image, setImage] =useState ("")
    const[ingredients, setIngredients] =useState ("")
    const[recipe, setRecipe] =useState ("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
    

    const newRecipe = {
        name : name,
        image : image,
        ingredients : ingredients,
        recipe : recipe
    }

    fetch('http://localhost:3000/desserts', {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify(newRecipe)
    })
        .then(r=>r.json())
        .then(newRecipe => {
            addNewDessert(newRecipe)
            setName("")
            setImage("")
            setIngredients("")
            setRecipe("")
        })
    }


    return(
    <div> 
        <h3>Add Your Dessert Here!</h3>
         <form onSubmit={handleSubmit}>
            <input value= {name} onChange={(e) => setName(e.target.value)}type="text" name="name" placeholder="Dessert Name" />
            <input value= {image} onChange={(e) => setImage(e.target.value)}type="text" name="image" placeholder="Image URL" />
            <input value= {ingredients} onChange={(e) => setIngredients(e.target.value)} type="text" name="ingredients" placeholder="Ingredients" />
            <input value= {recipe} onChange={(e) => setRecipe(e.target.value)} type="text" name="recipe" placeholder="Recipe Instructions" />
            <button type="submit">Submit Dessert</button>
        </form>
      </div>
    );
}


export default DessertForm
