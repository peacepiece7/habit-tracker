import React, { PureComponent } from 'react';
import Habit from './habit';
import HabitAddForm from "./habitAddForm"


class Habits extends PureComponent {

  handleAdd = (name) => {
    this.props.onAdd(name)
  }

  render() {
    return (
      <div className="habits">
        <HabitAddForm
        onAdd={this.handleAdd}
        />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>reset</button>
      </div>
    );
  }
}

export default Habits;
