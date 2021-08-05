import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { name: "Reading", count: 0, id: 1 },
      { name: "coding", count: 0, id: 2 },
      { name: "sleeping", count: 0, id: 3 },
    ],
  };
  handleIncrement = (habit) => {
    console.log("increment");
    let habitAry = this.state.habits;
    // habitAry.splice(
    for (let i = 0; i < habitAry.length; i++) {
      if (habitAry[i].name === habit.name) {
        this.setState((state) => (state.habits[i].count = habitAry[i].count + 0.5));
      }
    }
  };

  handleDecrement = (habit) => {
    let habitAry = this.state.habits;
    for (let i = 0; i < habitAry.length; i++) {
      if (habitAry[i].name === habit.name) {
        this.setState((state) => (state.habits[i].count = habitAry[i].count - 0.5));
      }
    }
  };
  handleDelete = (habit) => {
    console.log(habit, "DELETE");
    let habitAry = this.state.habits;
    console.log(habitAry.indexOf(habit));
    this.setState((state) => (state = state.habits.splice(habitAry.indexOf(habit), 1)));
  };
  render() {
    // arrow function도 js로 return하려면 소괄호 써야함
    return (
      <div>
        {this.state.habits.map((habit) =>
          // prettier-ignore
          <Habit 
          key={habit.id}
          habit={habit}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}>
          </Habit>,
        )}
      </div>
    );
  }
}

export default Habits;
