import React from "react";

class RenderAsFunction extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return this.props.children({ style: "crazy" });
  }
}

export default RenderAsFunction;
