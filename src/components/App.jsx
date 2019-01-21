import React, { Component, PureComponent } from "react";
import "./App.scss";

import Footer from "./PageLayout/Footer.jsx";
import Header from "./PageLayout/Header.jsx";
import Page from "./PageLayout/Page.jsx";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showSearchResults: false
    }
  }


  render() {
    return (
      <div>
        <Header />
        <Page />
        <Footer text={8} />
      </div>
    );
  }
}

export default App;