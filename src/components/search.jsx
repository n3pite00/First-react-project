import Axios from "axios"
import { useState } from "react"

function Search() {

    const [info, setInfo] = useState("")
    const [search, setSearch] = useState("")

    function generateSearch() {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then(res => {
            if(res.data.drinks) {
                setInfo(res.data.drinks[0])
            } else {
                setInfo({strDrink: "No drinks found", strInstructions: ""})
            }
            
        })
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
        <h2> Search Cocktail!</h2>
        <input
            type="text"
            placeholder="Search Cocktail"
            onChange={handleChange}
            value={search}
        />
        <button onClick= {generateSearch}> Search </button>
        <h2>{info.strDrink}</h2>
        <p>{info.strInstructions}</p>
        </>
    )
}

export default Search