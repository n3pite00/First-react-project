import { useState } from 'react'

function Products(){

    const productNames = ['Apple iPhone 14', 'Google Pixel 7a 5G', 'Samsung Galaxy A55 5G', 'Fairphone 4 5G']
    const prize = ['649€','399€','349€','449€']

    const [index, setindex] = useState(0)
    const [Quantity, setQuantity] = useState(0)

    const HandleProductChange = (event) => {
        setindex(event.target.value)
    }

    return(
    <>
        <h2>Select product:</h2>
        <p>Product</p>
        <select onChange={HandleProductChange}>
            <option value="Select product">Select product</option>
            
        </select>
    </>
    )
}

export default Products