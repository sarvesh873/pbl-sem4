import React from "react";
import ReactDOM from "react-dom";

/* REDUX */
import { Provider } from "react-redux";
import store from "./store";

/* COMPONENTS */
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* STYLING */
import "./index.css";
import "./bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// alanBtn({
//   top: "15px",
//   left: "15px",
//   key: process.env.REACT_APP_ALAN_KEY,
//   onCommand: ({ command, payload }) => {
//     window.dispatchEvent(new CustomEvent(command, { detail: payload }))
//   }
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
