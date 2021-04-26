import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, Divider, Typography } from "@material-ui/core";

const ItemOnList = (props) => (
  <Card>
    <Typography></Typography>
    <Divider />
    Status: <Typography></Typography>
    <Link>Edit</Link>
  </Card>
);

export default class BucketList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsOnList: [],
    };
  }

  loadBucketListItems = () => {
    return this.state.itemsOnList.map(function (listItem, i) {
      return <ItemOnList itemOnList={listItem} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <Card>
          <Typography variant="h6">Welcome to your Bucket List</Typography>
        </Card>

        <div>
          {this.state.itemsOnList ? (
            <Grid>{this.loadBucketListItems()}</Grid>
          ) : (
            <Grid>
              <Card>
                <h1>Enter something already!!</h1>
                <h2>The clock is ticking!!</h2>
              </Card>
            </Grid>
          )}
        </div>
      </div>
    );
  }
}
