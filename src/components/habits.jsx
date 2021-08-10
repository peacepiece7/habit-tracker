import React, { memo } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = memo(props => {
  console.log("habits component")
  const handleAdd = name => {
    props.onAdd(name);
  }
  const handleIncrement = habit => {
    props.onIncrement(habit)
  }
  const handleDecrement = habit => {
    props.onDecrement(habit)
  }
  const handleDelete = habit => {
    props.onDelete(habit)
  }
  const handleReset = () => {
    props.onReset()
  }

  return (
    <div className="habits">
      <HabitAddForm onAdd={handleAdd} />
      <ul>
        {
        props.habits.map((habit) => (
          <Habit
          key={habit.id} 
          habit={habit} 
          onIncrement={handleIncrement} 
          onDecrement={handleDecrement} 
          onDelete={handleDelete} 
          />
        ))
        }
      </ul>
      <button className="habits-reset" onClick={handleReset}>
        reset
      </button>
    </div>
  );
}, (prev,next) => {
  console.log("habits : prev props & next props is same?", prev === next)
});

export default Habits;
