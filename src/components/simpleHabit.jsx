import React, { useCallback, useEffect, useRef, useState } from "react"

// re-render whole function perperties on app update
// 계속 업데이트 되니까 호출될 떄 마다 객체의 ref가 변경되고 호출됨
// useState를 사용하면 객체가 변경되지만 해당 객체의 값을 기억해줌
// createRef -> 랜더링 될 떄 마다 새로운 ref를 만듬
// useRef() -> 메모리에 저장해두고 사용함
// function, react hooks를 사용하면 class의 binding, this의 반복사용을 없앨 수 있음 

const SimpleHabit = () => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();
// 메모리에 함수를 올려 놓음(cache component), 함수 ref가 계속 변하는 사이드 이펙트를 막아줌
const handleIncrement = useCallback(() => setCount(count + 1))

    // mount, undate시 호출 
    // [] ->  mount시 호출
    // [prop] ->  mount + prop이 변경시 호출
    // null -> mount, update시 호출
    // don`t call hooks inside loops, conditions and nested function
    useEffect(()=> {
        console.log(`Mounted & Updataed: ${count}`)
    });

    return (
      <li className="habit">
        <span ref={spanRef} className="habit-name">Reading</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={handleIncrement} >
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
}

export default SimpleHabit