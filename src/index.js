import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
// import App from "./test/app";

ReactDOM.render(
  // strct mode에서는 모든 컴포넌트를 두 번씩 호출해서 잘못된 건 없는지 체크함, 배포사 한 번만 호춣함으로 성능문제 없음 개발용임
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
