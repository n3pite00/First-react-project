import '../styles/info.css'



function ProductionInfo({ Selectedproduct, Selectedprice, count}) {
    const total = count * Selectedprice

    return(
    <>
        <h2>Order info</h2>
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>{Selectedproduct}</td>
                <td>{count}</td>
                <td>{total}</td>
            </tr>
        </table>
    </>
    )
}

export default ProductionInfo