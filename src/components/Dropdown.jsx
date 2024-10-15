import { useState } from "react"
import ProductionInfo from "./info"


function Products(){

    const productNames = ['Apple iPhone 14', 'Google Pixel 7a 5G', 'Samsung Galaxy A55 5G', 'Fairphone 4 5G']
    const price = [649, 399, 349, 449]  

    const [selected, setindex] = useState(0)

    const product = productNames[selected]
    const Newprice = price[selected]

    const HandleProductChange = (event) => {
        setindex(event.target.value)
    }

    return(
    <>
        <h2>Select product:</h2>
        <p>Product</p>
        <select name="products" id="index" onChange={HandleProductChange}>
        {productNames.map((item, index) => (
        <option key={index} value={index}>
            {item} ({price[index] + '€'})
        </option>
        ))}
        </select>

        <ProductionInfo Selectedproduct={product} Selectedprice={Newprice} />
        
    </>
    )
}

export default Products