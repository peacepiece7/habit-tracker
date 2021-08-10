import React, { memo } from "react"
import Child from "./child"

const Childs = memo(props => {
    console.log("CHILDS")
    console.log("Childs props is", props)
    const currentStates = props.currentStates

const handlePlus = currentState => {
    props.onPlus(currentState)
}
const handleMinus = currentState => {
    props.onMinus(currentState)
}
    return (
        currentStates.map((currentState) => {
            return (
                <Child 
                    key={currentState.id}
                    currentState={currentState}
                    onPlus={handlePlus} 
                    onMinus={handleMinus}
                />
            )
        })
    )
})
export default Childs