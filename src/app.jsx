import React, { useCallback, useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

const App = () => {
  console.log("APP component")
  const [state, setState] = useState({habits : [
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]})
  const habits = state.habits

  const handleIncrement = useCallback(habit => {
    const HabitsAry = [...habits].map((item)=> {
      if(item.id !== habit.id){
        return item
      }else{
        return {id : item.id, name : item.name, count : item.count += 1}
      }
    })
    setState({habits : HabitsAry})
  }, [])

  const handleDecrement = habit => {
    const HabitsAry = [...habits].map((item)=> {
      if(item.id !== habit.id){
        return item
      }else{
        return {...item, count : item.count <= 0 ? 0 : item.count -= 1 }
      }
    })
    setState({habits : HabitsAry})
  }

  const handleDelete = habit => {
    const HabitsAry = habits.filter(item => item.id !== habit.id);
    setState({ habits : HabitsAry });
  }

  const handleAdd = name => {
    const HabitsAry = [...habits, { id: Date.now(), name, count: 0 }];
    setState({ habits : HabitsAry });
  }
  
  const handleReset = () => {
    const HabitsAry = [...habits].map((item)=> {
      // 변경된 요소를 따로 리턴해야 그 요소만 변경됨
      if(item.count !== 0) {
        return {...item, count : 0}
      }else {
        return item
      }
    })
    setState({habits : HabitsAry}) // this.state.something -> this.setState({something})
   }

  return (
    <>
      <Navbar
        totalCount={habits.filter(item => item.count > 0).length}
      />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
        onAdd={handleAdd}
      />
    </>
  );
}

export default App;
