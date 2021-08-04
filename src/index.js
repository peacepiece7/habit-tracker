import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Habit from "./habit";
import Header from "./components/header";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Habit></Habit>
  </React.StrictMode>,
  document.getElementById("root")
);
