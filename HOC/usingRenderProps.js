import React from "react";

class UsingRenderProps extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return this.props.render({ style: "fancy" });
  }
}

export default UsingRenderProps;
