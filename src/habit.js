import "./habit.css";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  state = {
    count: 0,
  };
  addCount = () => {
    console.log("count : +1");
    this.setState({ count: this.state.count + 1 });
  };
  minusCount = () => {
    console.log("count : -1");
    if (this.state.count < 1) {
      return;
    }
    this.setState({ count: this.state.count - 1 });
  };
  deleteHabit = () => {
    console.log("delete this habit");
  };
  render() {
    return (
      <div className="habit">
        <span className="habit-title">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-add" onClick={this.addCount}>
          <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
        </button>
        <button className="habit-minus" onClick={this.minusCount}>
          <FontAwesomeIcon icon={faMinusSquare}></FontAwesomeIcon>
        </button>
        <button className="habit-delete" onClick={this.deleteHabit}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    );
  }
}

export default Habit;
