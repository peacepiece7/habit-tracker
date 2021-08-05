import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Habits from "./components/habits";
import Header from "./components/header";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Habits></Habits>
  </React.StrictMode>,
  document.getElementById("root"),
);
