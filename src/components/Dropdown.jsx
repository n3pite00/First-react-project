

function Products(){

    const productNames = ['Apple iPhone 14', 'Google Pixel 7a 5G', 'Samsung Galaxy A55 5G', 'Fairphone 4 5G']
    const prize = [649, 399, 349, 449]  

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
            {item} ({prize[index] + '€'})
        </option>
        ))}
        </select>
    </>
    )
}

export default Products