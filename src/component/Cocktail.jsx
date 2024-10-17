import { useState } from "react"
import Axios from "axios"
import "../styles/cocktailStyle.css"

function Cocktail() {

    const [info, setInfo] = useState("")

    function generate() {

    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => {
        setInfo(res.data.drinks[0])
        
    })
    }
    return (
    <div className="container">
        <h1> Generate a Random Cocktail!</h1>
        <button onClick = {generate}> Cocktail! </button>
        <h2>{info.strDrink}</h2>
        <p>{info.strInstructions}</p>
    </div>
    )
}

export default Cocktail