import "./habit.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

// index는 key로 쓰면 안 됨
// 데이터를 보여주기만 하는 컴포넌트
class Habit extends Component {
  handleIncrement = () => {
    //console.log(this.props.habit);
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <div className="habit">
        <span className="habit-title">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-add" onClick={this.handleIncrement}>
          <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
        </button>
        <button className="habit-minus" onClick={this.handleDecrement}>
          <FontAwesomeIcon icon={faMinusSquare}></FontAwesomeIcon>
        </button>
        <button className="habit-delete" onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    );
  }
}

export default Habit;
