# concept

re-render the whole app on every update

virtual dom, re-render, components 

<br><br>

# component


### Class
- state. lifeCycle(default)
React.Component ( class habit extends Component )
React.PureComponent

### Function
meno(function)
React Hook (+ state, lifeCycle)

<br><br>

# perfomance

render함수 호출 시 ( 업데이트 되었을 떄 ) 전체 앱이 re-render된다.

이떄, VDOM이 변경사항을를 최소단위로 DOM에 올린다. (최소 요소만 업데이트됨)

그렇기 떄문에 성능이 좋다.

**DOM 전체가 깜빡 거릴 경우 잘못 작성하고 있는 것**

<br><br>

# 개발자 도구 react setting, 하이라이트 켜주기!

<br><br>

# pureComponent

render함수 호출 시 전체 앱이 re-render되지만

pureComponent를 extend할 경우, 해당 요소의 state가 shallow comparison: false를 반환하지 않는다면, re-render하지 않음

shallow comparison : 같은 객체를 참조하고 있다면 객체 내부의 값이 변해도 true를 반환 함

**console.log(this.state.originObject === callBackObject)**를 비교해서 false가 나와야 this.setState({originObject : callBackObject})가 적용됨

pureComponent를 사용해서 아래와 같이 작성할 수 있음

```js
// habitAddForm.jsx
import React, {PureComponent} from "react"

class HabitAddForm extends PureComponent {
    // 리엑트에서 제공하는 create.Ref로 맴버 변수를 정의해주고, 연결된 요소의 value를 가져올 수 있음
    formRef = React.createRef();
    inputRef = React.createRef();

    onHabitAdd =(event)=> {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
        this.formRef.current.reset();
        
        // js에서는 이렇게 value를 받아옴
        // const formEl = document.querySelector(".habitAddInput")
        // this.props.onAdd(formEl.value)
        // formEl.value = ""
    }
    render(){
        return (
        <>
        <form ref={this.formRef} className="habitAddForm">
            <input ref={this.inputRef} className="habitAddInput" type="text" placeholder="Add Habit" />
            <input type="submit" onClick={this.onHabitAdd}></input>
        </form>
        </>
        )
    }
}
export default HabitAddForm

// app.jsx
// havitAddFrom.jsx에서 onAdd()의 인자를 handleAdd에서 받음
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
```


# LifeCycle Method

아래와 같이 구현할 수 있고,

Compoenent를 extend하면 사용할 수 있음

soket통신, setTimeout, loading spiner같은 것들을 구현할 떄 사용할 수 있음

```js
componentDidMount(){
 // something logic ...
}
componentWillUnmount(){
 // something logic ...
}
componentDidUpdate(){
 // something logic ...
}
```




