import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/Nav";
import BucketList from "./Components/BucketList.component";
import EditItem from "./Components/EditItem.component";
import CreateItem from "./Components/CreateItem.component";
import CompletedItems from "./Components/CompletedItems.component";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>The Bucket List</h1>
          <h4>Helping get your affairs in order</h4>
        </div>
        <NavBar />

        <Route path="/" exact component={BucketList} />
        <Route path="/edit/:id" component={EditItem} />
        <Route path="/completed" component={CompletedItems} />
        <Route path="/create" component={CreateItem} />
      </Router>
    );
  }
}
