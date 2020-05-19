import React from "react";
import "./styles.css";
import List from "../components/List";
import FancyList from "../components/FancyList";
import RenderAsFunction from "../HOC/renderAsFunction";
import UsingRenderProps from "../HOC/usingRenderProps";

export default function App() {
  return (
    <div className="App">
      <h2>Simple List component</h2>
      <List />
      <h2>List component using HOC</h2>
      <FancyList />
      <h2>List component as children function</h2>
      <RenderAsFunction>{props => <List {...props} />}</RenderAsFunction>
      <h2>List component as render prop</h2>
      <UsingRenderProps render={props => <List {...props} />} />
    </div>
  );
}
