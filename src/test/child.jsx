import React, { memo } from "react";

const Child = memo(props => {
    console.log("Child props is ", props)

    const currentState = props.currentState

    const handlePlus = () => {
        props.onPlus(currentState)
    }
    const handleMinus = () => {
        props.onMinus(currentState)
    }
    return (
        <div>
            <span>{currentState.name}</span>
            <button onClick={handlePlus}>PLUS</button>
            <button onClick={handleMinus}>MINUS</button>
            <span>{currentState.count}</span>
        </div>
    )
})

export default Child