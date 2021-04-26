import React, { Component } from "react";
import { Card, TextField, Button } from "@material-ui/core";

const cardStyles = {
  textAlign: "center",
};

const formStyles = {
  padding: "5%",
  display: "inline-grid",
};

export default class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bucketListItem_name: "",
      error: "",
    };
  }

  render() {
    return (
      <div>
        <Card style={cardStyles}>
          <h3>Add and item to your Bucket List!</h3>

          <hr />

          <form style={formStyles}>
            <TextField
              style={{ width: 250 }}
              placeholder="What would you like to do?"
              margin="normal"
            />

            <Button>Submit</Button>
            <Button>Cancel</Button>
          </form>
        </Card>
      </div>
    );
  }
}
