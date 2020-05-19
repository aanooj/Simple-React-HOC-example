import React from "react";
import "./styles.css";

const iterator = [1, 2, 3, 4, 5];

const List = props => {
  const list = iterator.map((value, index) => <li key={index}>{value}</li>);
  return <ul className={props.style}>{list}</ul>;
};

List.defaultProps = {
  style: "simple"
};

export default List;
