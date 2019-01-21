import React, { Component } from "react";

import "./Header.scss";
import SearchForm from "./SearchForm.jsx";

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <header className="some-class">
        <p>Поиск:</p>
        <SearchForm />
      </header>
    );
  }
}

export default Header;