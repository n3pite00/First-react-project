import { useState } from "react"
import Axios from "axios"

function Cocktail() {

    const [info, setInfo] = useState("")

    function generate() {

    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(res => {
        setInfo(res.data.drinks[0])
        
    })
    }
    return (
        <>
        <h1> Generate a Random Cocktail!</h1>
        <button onClick = {generate}> Cocktail! </button>
        <h2>{info.strDrink}</h2>
        <p>{info.strInstructions}</p>
        </>
    )
}

export default Cocktail