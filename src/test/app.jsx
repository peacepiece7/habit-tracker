import React, { useState } from "react"
import Childs from "./childs"
const App = () => {
    console.log("APP")
    const [state, setState] = useState({currentStates : [
        {id : 1, name: "first", count : 0},
        {id : 2, name: "second", count : 0},
        {id : 3, name: "third", count : 0}
    ]})
    const handlePlus = prevState => {
        const newStates = [...state.currentStates].map((nextState) => {
            if(nextState.id === prevState.id ){
                return { ...prevState, count : prevState.count+1}
            }else{
                return nextState
            }
        })
        setState({currentStates : newStates})
    }
    const handleMinus = prevState => {
        const newStates = [...state.currentStates].map((nextState) => {
            if(nextState.id === prevState.id ){
                return { ...prevState, count : prevState.count <= 0 ? 0 : prevState.count-1}
            }else{
                return nextState
            }
        })
        setState({currentStates : newStates})
    }
    return <div className="main-container">
        <button>reset</button>
        <button>add</button>
        <Childs currentStates={state.currentStates} onPlus={handlePlus} onMinus={handleMinus}/>
    </div>
}

export default App