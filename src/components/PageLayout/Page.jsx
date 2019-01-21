import React, { Component } from "react";

import "./Page.scss";

class Page extends Component {
  render() {
    const { children } = this.props;
    return <div id="page">{children}</div>;
  }
}

export default Page;
