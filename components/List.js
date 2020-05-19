import React from "react";
import "./styles.css";

const todo = ["milk", "Banana", "Bread", "Ice Cream"];

const List = props => {
  const list = todo.map((value, index) => <li key={index}>{value}</li>);
  return <ul className={props.style}>{list}</ul>;
};

List.defaultProps = {
  style: "simple"
};

export default List;
