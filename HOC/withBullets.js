import React from "react";

const withBullets = (ChildComponent, style) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
    }
    render() {
      return <ChildComponent style={style} />;
    }
  };
};

export default withBullets;
