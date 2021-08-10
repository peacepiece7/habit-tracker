import React, { memo,useCallback } from 'react';


const Habit = memo((props) => {
  console.log("habit component")
  const handleIncrement = useCallback(() => {
    console.log("running")

  },[])
 
  const handleDecrement = () => {
     props.onDecrement(props.habit);
   };
 
  const  handleDelete = () => {
     props.onDelete(props.habit);
   };
 
   const { name, count } = props.habit;
   return (
     <li className="habit">
       <span className="habit-name">{name}</span>
       <span className="habit-count">{count}</span>
       <button
         className="habit-button habit-increase"
         onClick={handleIncrement} >
         <i className="fas fa-plus-square"></i>
       </button>
       <button
         className="habit-button habit-decrease"
         onClick={handleDecrement}>
         <i className="fas fa-minus-square"></i>
       </button>
       <button
         className="habit-button habit-delete"
         onClick={handleDelete}>
         <i className="fas fa-trash"></i>
       </button>
     </li>
   );
 },(prev,next) => {
   console.log("habit component : prev prop & next prop is same?", prev===next)
 }
 )

export default Habit;
