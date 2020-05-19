import React from "react";
import "./styles.css";
import List from "../components/List";
import FancyList from "../components/FancyList";
import RenderAsFunction from "../HOC/renderAsFunction";
import UsingRenderProps from "../HOC/usingRenderProps";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <RenderAsFunction>{props => <List {...props} />}</RenderAsFunction>
      <UsingRenderProps render={props => <List {...props} />} />
      <List />
      <FancyList />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
