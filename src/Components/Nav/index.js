import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h2 component={Link}>Mylist</h2>
        </Link>

        <Link to="/create">
          <h2 component={Link}>Create Item</h2>
        </Link>

        <Link to="/completed">
          <h2 component={Link}>Completed Items</h2>
        </Link>
      </header>
    );
  }
}
