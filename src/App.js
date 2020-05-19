import React from "react";
import "./styles.css";
import List from "../components/List";
import FancyList from "../components/FancyList";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <List />
      <FancyList />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
