import React, { Component } from "react";

import './Footer.scss';

class Footer extends Component {
  render() {
    return <footer>{`React home work, lesson №${this.props.text}, ${new Date().getFullYear()} year ©`}</footer>;
  }
}

export default Footer;
