
function DessertDetail({dessert, handleFavorite}){

    return(
        <div>
            <h3>{dessert.name}</h3>
            <img src={dessert.image} style={{width:"200px"}}/>
            <br></br>
            <button onClick={(e) => handleFavorite(e, dessert)}> {dessert.favorited ?"❤️" : "♡" }</button>
            <p>{dessert.ingredients}</p>
            <p>{dessert.recipe}</p>
        
        </div>
    )
}
export default DessertDetail;