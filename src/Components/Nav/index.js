import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default class NavBar extends Component {
  render() {
    return (
      <header>
        <Paper>
          <Tabs centered>
            <Tab label="My List" to="/" component={Link} />

            <Tab label="Create Item" to="/create" component={Link} />

            <Tab label="Completed Items" to="/completed" component={Link} />
          </Tabs>
        </Paper>
      </header>
    );
  }
}
