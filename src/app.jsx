import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    const habits = [...this.state.habits].map((item)=> {
      if(item.id !== habit.id){
        return item
      }else{
        return {id : item.id, name : item.name, count : item.count += 1}
      }
    })
    this.setState({habits})
  };

  handleDecrement = habit => {
    const habits = [...this.state.habits].map((item)=> {
      if(item.id !== habit.id){
        return item
      }else{
        return {...item, count : item.count <= 0 ? 0 : item.count -= 1 }
      }
    })
    this.setState({habits})
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };
  
  handleReset = () => {
    const habits = [...this.state.habits].map((item)=> {
      // 변경된 요소를 따로 리턴해야 그 요소만 변경됨
      if(item.count !== 0) {
        return {...item, count : 0}
      }else {
        return item
      }
    })
    this.setState({habits}) // this.state.something -> this.setState({something})
   }
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
