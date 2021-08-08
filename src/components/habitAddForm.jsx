import React, { memo } from "react"

// function을 PureComponent처럼 state의 변경사항이 없을 떄 component를 re-render하고 싶지 않다면
// memo()를 사용할 수 있음
const HabitAddForm = memo(props => {
    // react api createRef()로 맴버 변수를 정의해주고, 맴버 변수와 연결된 요소의 value를 아래와 같이 가져올 옴
        const formRef = React.createRef();
        const inputRef = React.createRef();
    
        const onHabitAdd =(event)=> {
            event.preventDefault();
            const name = inputRef.current.value;
            name && props.onAdd(name);
            inputRef.current.value = '';
            formRef.current.reset();
        }

        return (
            <>
            <form ref={formRef} classame="habitAddForm">
                <input ref={inputRef} className="habitAddInput" type="text" placeholder="Add Habit" />
                <input type="submit" onClick={onHabitAdd}></input>
            </form>
            </>
            )
    })

export default HabitAddForm