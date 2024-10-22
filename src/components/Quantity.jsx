import { useState } from "react"

function Quantity () {
    const [count, setCount] = useState(0)

    function MinusCount() {
        setCount(prevCount => {
            if (prevCount > 0) {
                return prevCount - 1
            }
            return prevCount
        })
    
    }

    function PlusCount() {
        setCount(prevCount => prevCount + 1)
    }
    
    return (
    <>
        <p>Quantity:</p>
        <button onClick={MinusCount}>-</button>
        <span>{count}</span>
        <button onClick={PlusCount}>+</button>
    </>
    )
}

export default Quantity